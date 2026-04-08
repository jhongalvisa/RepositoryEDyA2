import { createContext } from "react"
import type { Task } from "../types/task"

type TaskForm = {
  title: string
  description: string
}

export type TaskContextType = {
  tasks: Task[]
  loadingTasks: boolean
  taskError: string | null
  createTask: (task: TaskForm) => Promise<boolean>
  updateTaskData: (id: string, task: TaskForm) => Promise<boolean>
  toggleTaskDone: (task: Task) => Promise<boolean>
  deleteTaskData: (id: string) => Promise<boolean>
}

export const TaskContext = createContext<TaskContextType | null>(null)