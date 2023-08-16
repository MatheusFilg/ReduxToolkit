import { AlertTriangle } from "lucide-react";
import { useAppSelector } from "../store";
import TodoCard from "./TodoCard";

export function TodoList() {
  const tasks = useAppSelector(state => {
    return state.todoList.todo?.tasks
  })

  return (
      <div className="flex flex-col gap-2">
        {tasks && tasks.map((task) => {
          return (
            <TodoCard
              id={task.id}
              text={task.text}
              key={task.id} 
            />
          )
        })}
        {tasks && tasks?.length <= 0 && (
          <div className='flex flex-col items-center justify-center relative -left-6 text-salmon-50 gap-1 mt-16'>
          <AlertTriangle size={40} />
          <strong className='underline text-xl'>Não há tarefas cadastradas!</strong>
          <span className='text-lg'>Crie novas tarefas e organize seus afazeres</span>
        </div>
        )}
      </div>
  )
}

