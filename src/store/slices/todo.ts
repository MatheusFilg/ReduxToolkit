import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

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

export const loadTodo = createAsyncThunk(
  'Todo/load',
  async () => {
   const response = await api.get('/todo/1')
   return response.data
  }
)
// o asyncThunk nada mais uma ação (como as que são criadas nos reducers) sendo que async

export const todoSlice = createSlice({
  name: 'todoList',
  initialState, 
  reducers: {
    // add: (state, action) => {
    //   const newTodo = {
    //     id: Number,
    //     text: action.payload.newTask,
    //     status: Boolean
    //   }
    //   state.todo?.tasks.push(newTodo)
    // },
    remove: (state,action) => {
      state.todo?.tasks.splice(action.payload, 1)

      // state.todo?.tasks.filter((task) => task.id !== action.payload.id)
      // Essa maneira também dispara a função no redux dev tools, porém nada acontece. Nao entendi o motivo
    },
  },
  extraReducers(builder) {
    builder.addCase(loadTodo.fulfilled, (state, action) => {
      state.todo = action.payload
    })
  },
})
  // criando uma ação de carregar a lista de Todo quando o asyncThunk conseguir enviar a ação de fullfilled
  // o extra reducers server para esse slice receber ações de outras slices ou de async thunks (como é o exemplo)


export const todoList = todoSlice.reducer
export const { remove } = todoSlice.actions
