import { useContext, useEffect, useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { TaskContext } from "./TaskContext"
import useCollection, { type FirestoreDocument } from "../hooks/useCollection"
import type { Task } from "../types/task"

type TaskForm = {
  title: string
  description: string
}

function mapTask(document: FirestoreDocument): Task {
  return {
    id: document.id,
    title: String(document.title || ""),
    description: String(document.description || ""),
    done: Boolean(document.done),
    uid: String(document.uid || ""),
  }
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext)
  const { results, error, getAll, add, update, remove } = useCollection("tasks")
  const [loadingTasks, setLoadingTasks] = useState(false)

  const tasks = authContext?.user ? results.map(mapTask) : []

  useEffect(() => {
    const loadTasks = async () => {
      if (!authContext?.user) {
        setLoadingTasks(false)
        return
      }

      setLoadingTasks(true)
      await getAll([["uid", "==", authContext.user.uid]])
      setLoadingTasks(false)
    }

    void loadTasks()
  }, [authContext?.user, getAll])

  const createTask = async (task: TaskForm) => {
    if (!authContext?.user) {
      return false
    }

    const newTask = await add({
      title: task.title,
      description: task.description,
      done: false,
      uid: authContext.user.uid,
    })

    return newTask !== null
  }

  const updateTaskData = async (id: string, task: TaskForm) => {
    return await update(id, {
      title: task.title,
      description: task.description,
    })
  }

  const toggleTaskDone = async (task: Task) => {
    return await update(task.id, {
      done: !task.done,
    })
  }

  const deleteTaskData = async (id: string) => {
    return await remove(id)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadingTasks,
        taskError: error,
        createTask,
        updateTaskData,
        toggleTaskDone,
        deleteTaskData,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}