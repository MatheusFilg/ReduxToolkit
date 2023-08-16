import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number
  tasks: Array<{
    id: number
    text: string
    status: boolean
  }>
}

interface TodoState {
  todo: Todo | null
}

const initialState: TodoState = {
  todo: null
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState, 
  reducers: {
    start: (state, action :PayloadAction<Todo>) => {
      state.todo = action.payload
    },

    add: (state, action) => {
      const newTodo = {
        id: Number,
        text: action.payload.newTask,
        status: Boolean
      }
      state.todo?.tasks.push(newTodo)
    },
    remove: (state,action) => {
      state.todo?.tasks.splice(action.payload, 1)

      // state.todo?.tasks.filter((task) => task.id !== action.payload.id)
      // Essa maneira também dispara a função no redux dev tools, porém nada acontece. Nao entendi o motivo
    },
  },
})


export const todoList = todoSlice.reducer
export const { add, remove, start } = todoSlice.actions
