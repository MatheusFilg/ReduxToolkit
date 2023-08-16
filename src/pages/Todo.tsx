import Header from '../components/Header'
import { TodoList } from '../components/TodoList'
import Counter from '../components/Counter'
import { useEffect } from 'react'
import { loadTodo } from '../store/slices/todo'
import { useAppDispatch } from '../store'

export function Todo() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadTodo())
  })

  return (
    <div  className="flex flex-col items-center w-full">
      <Header />
      <Counter />
      <TodoList /> 
    </div>
  )
}
