import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"

interface Task {
  id: string
  description: string
  isChecked: boolean
}

interface TodoState {
  todos: Task[] 
  addTask: (description: string) => void,
  removeTask: (id: string) => void,
  toggleCompleteTask: (id: string) => void
  // tipando as ações que vou ter no meu store

  // load: () => Promise<void>
}

export const useStore = create<TodoState>((set) => {
  return {
    todos: [],
    // Exemplo de como seria caso tivesse que consumir uma API
    // load:async () => {
    //   const response = await api.get('/todo/1')
    //   set({todos: response.data})
    // },
    addTask: (description: string) => {
      set((state) => ({
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            description,
            isChecked: false,
          } as Task,
        ],
      }));
    },
    removeTask: (id) => {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      }))
    },

    toggleCompleteTask(id) {
      set((state) => ({
        todos: state.todos.map((todo) =>
        todo.id === id
        ? ({ ...todo, isChecked: !todo.isChecked} as Task)
        : todo
        )
      }))
    },
  }
})