import { useState } from "react"
import { db } from "../firebase/config"
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  type WhereFilterOp,
} from "firebase/firestore"

export type Filter = [string, WhereFilterOp, unknown]

export type FirestoreDocument = {
  id: string
  [key: string]: unknown
}

export default function useCollection(table: string) {
  const [results, setResults] = useState<FirestoreDocument[]>([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getAll = async (filters: Filter[] = []) => {
    setIsPending(true)
    setError(null)

    try {
      let q = query(collection(db, table))

      for (const [field, op, value] of filters) {
        q = query(q, where(field, op, value))
      }

      const snapshot = await getDocs(q)

      const docs: FirestoreDocument[] = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }))

      setResults(docs)
      setIsPending(false)
      return docs
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocurrió un error al obtener los datos")
      }

      setIsPending(false)
      return []
    }
  }

  const add = async (data: Record<string, unknown>) => {
    setIsPending(true)
    setError(null)

    try {
      const docRef = await addDoc(collection(db, table), {
        ...data,
        createdAt: serverTimestamp(),
      })

      const newDoc: FirestoreDocument = {
        id: docRef.id,
        ...data,
      }

      setResults((prev) => [...prev, newDoc])
      setIsPending(false)
      return newDoc
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocurrió un error al agregar el documento")
      }

      setIsPending(false)
      return null
    }
  }

  const update = async (id: string, data: Record<string, unknown>) => {
    setIsPending(true)
    setError(null)

    try {
      await updateDoc(doc(db, table, id), {
        ...data,
        updatedAt: serverTimestamp(),
      })

      setResults((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, ...data }
          }

          return item
        })
      )

      setIsPending(false)
      return true
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocurrió un error al actualizar el documento")
      }

      setIsPending(false)
      return false
    }
  }

  const remove = async (id: string) => {
    setIsPending(true)
    setError(null)

    try {
      await deleteDoc(doc(db, table, id))
      setResults((prev) => prev.filter((item) => item.id !== id))
      setIsPending(false)
      return true
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("Ocurrió un error al eliminar el documento")
      }

      setIsPending(false)
      return false
    }
  }

  return { results, isPending, error, getAll, add, update, remove }
}
