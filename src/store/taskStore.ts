import { create } from 'zustand'
import type { Task as TaskType } from '../types'
import { persist } from 'zustand/middleware'

interface Task {
  tasks: TaskType[]
  taskSelected: TaskType
  addTask: (task: TaskType) => void
  deleteTask: (id: number) => void
  updateTask: (task: TaskType) => void
  addTaskSelected: (task: TaskType) => void
  taskCompleted: (task: TaskType) => void
}

export const useTask = create(persist<Task>((set, get) => ({
  tasks: [],
  taskSelected: {
    id: 0,
    task: '',
    complete: false
  },
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: state.tasks.length + 1, complete: false }]
    }))
  },
  deleteTask: (id) => {
    const list = get().tasks
    const taskFiltered = list.filter(task => task.id !== id)
    set({ tasks: taskFiltered })
  },
  addTaskSelected: (task) => {
    set({ taskSelected: task })
  },
  updateTask: (task) => {
    const list = get().tasks
    const found = list.find(t => t.id === task.id)
    if (found) {
      found.task = task.task
    }
  },
  taskCompleted: (task) => {
    const list = get().tasks
    const found = list.find(t => t.id === task.id)
    const foundIndex = list.findIndex(t => t.id === task.id)
    if (found) {
      found.complete = !found.complete
    }
    const newList = list.filter(t => t.id !== task.id)
    newList.splice(foundIndex, 0, found!)
    set({ tasks: newList })
  }
}),
{
  name: 'tasks'
}
))
