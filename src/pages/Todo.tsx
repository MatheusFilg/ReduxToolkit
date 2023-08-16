import Header from '../components/Header'
import { TodoList } from '../components/TodoList'
import Counter from '../components/Counter'
import { useEffect } from 'react'
import { api } from '../lib/axios'
import { useDispatch } from 'react-redux'
import { start } from '../store/slices/todo'

export function Todo() {
  const dispatch = useDispatch()

  useEffect(() => {
    api.get('/todo/1').then(response => {
      dispatch(start(response.data))
    })
  }, [])

  return (
    <div  className="flex flex-col items-center w-full">
      <Header />
      <Counter />
      <TodoList /> 
    </div>
  )
}
