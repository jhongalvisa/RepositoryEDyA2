import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { TaskContext } from "../context/TaskContext"
import type { Task } from "../types/task"

type Challenge05PageProps = {
  goBack: () => void
}

function Challenge05Page({ goBack }: Challenge05PageProps) {
  const authContext = useContext(AuthContext)
  const taskContext = useContext(TaskContext)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [editingTaskId, setEditingTaskId] = useState("")
  const [saving, setSaving] = useState(false)

  if (!authContext || !taskContext) {
    return null
  }

  const completedTasks = taskContext.tasks.filter((task) => task.done).length

  const cleanForm = () => {
    setTitle("")
    setDescription("")
    setEditingTaskId("")
  }

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("La tarea debe tener título")
      return
    }

    setSaving(true)

    let success = false

    if (editingTaskId) {
      success = await taskContext.updateTaskData(editingTaskId, {
        title,
        description,
      })
    } else {
      success = await taskContext.createTask({
        title,
        description,
      })
    }

    setSaving(false)

    if (success) {
      cleanForm()
    }
  }

  const handleEdit = (task: Task) => {
    setEditingTaskId(task.id)
    setTitle(task.title)
    setDescription(task.description)
  }

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("¿Seguro que quieres eliminar esta tarea?")

    if (!confirmed) {
      return
    }

    await taskContext.deleteTaskData(id)

    if (editingTaskId === id) {
      cleanForm()
    }
  }

  const handleLogout = async () => {
    await authContext.logout()
  }

  return (
    <div className="container py-4 task-page">
      <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 align-items-lg-center mb-4">
        <div>
          <span className="badge text-bg-dark mb-2">Challenge 05</span>
          <h1 className="mb-1">Task App</h1>
          <p className="text-secondary mb-0">
            Usuario activo: <strong>{authContext.user?.email}</strong>
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-secondary" onClick={goBack}>
            Volver al dashboard
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 h-100 auth-card">
            <div className="card-body">
              <h2 className="h4 mb-3">
                {editingTaskId ? "Editar tarea" : "Crear tarea"}
              </h2>

              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Hacer el challenge"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Escribe una descripción corta"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>

              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary" onClick={handleSubmit} disabled={saving}>
                  {saving
                    ? "Guardando..."
                    : editingTaskId
                      ? "Actualizar tarea"
                      : "Agregar tarea"}
                </button>

                {editingTaskId ? (
                  <button className="btn btn-outline-dark" onClick={cleanForm}>
                    Cancelar edición
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm stats-card">
                <div className="card-body">
                  <p className="text-secondary mb-1">Total tareas</p>
                  <h3 className="mb-0">{taskContext.tasks.length}</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm stats-card">
                <div className="card-body">
                  <p className="text-secondary mb-1">Completadas</p>
                  <h3 className="mb-0">{completedTasks}</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm stats-card">
                <div className="card-body">
                  <p className="text-secondary mb-1">Pendientes</p>
                  <h3 className="mb-0">{taskContext.tasks.length - completedTasks}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-0 auth-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <h2 className="h4 mb-0">Listado de tareas</h2>
                {taskContext.loadingTasks ? (
                  <span className="badge text-bg-warning">Cargando...</span>
                ) : null}
              </div>

              {taskContext.taskError ? (
                <div className="alert alert-danger">{taskContext.taskError}</div>
              ) : null}

              {!taskContext.tasks.length && !taskContext.loadingTasks ? (
                <div className="empty-state rounded-4 p-4 text-center">
                  <p className="mb-0">No tienes tareas todavía. Crea la primera arriba.</p>
                </div>
              ) : null}

              <div className="d-flex flex-column gap-3">
                {taskContext.tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`task-card rounded-4 p-3 ${task.done ? "task-card--done" : ""}`}
                  >
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                      <div>
                        <div className="d-flex gap-2 align-items-center flex-wrap mb-2">
                          <h3 className="h5 mb-0">{task.title}</h3>
                          <span className={`badge ${task.done ? "text-bg-success" : "text-bg-secondary"}`}>
                            {task.done ? "Hecho" : "Pendiente"}
                          </span>
                        </div>
                        <p className="text-secondary mb-0">
                          {task.description || "Sin descripción"}
                        </p>
                      </div>

                      <div className="d-flex flex-wrap gap-2 align-self-start">
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => void taskContext.toggleTaskDone(task)}
                        >
                          {task.done ? "Marcar pendiente" : "Marcar Hecho"}
                        </button>
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleEdit(task)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => void handleDelete(task.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge05Page
