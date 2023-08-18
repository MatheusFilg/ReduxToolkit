import Header from '../components/Header'
import { TodoList } from '../components/TodoList'
import Counter from '../components/Counter'

export function Todo() {
  return (
    <div  className="flex flex-col items-center w-full">
      <Header />
      <Counter />
      <TodoList /> 
    </div>
  )
}
