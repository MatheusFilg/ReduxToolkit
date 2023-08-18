import { AlertTriangle } from "lucide-react";
import TodoCard from "./TodoCard";
import { useStore } from "../zustand-store";

export function TodoList() {
  const { todos } = useStore()

  return (
      <div className="flex flex-col gap-2">
        {todos && todos.map((task) => {
          return (
            <TodoCard
              key={task.id}
              id={task.id}
              checked={task.isChecked}
              text={task.description}
            />
          )
        })}
        {todos && todos?.length <= 0 && (
          <div className='flex flex-col items-center justify-center relative -left-6 text-salmon-50 gap-1 mt-16'>
          <AlertTriangle size={40} />
          <strong className='underline text-xl'>Não há tarefas cadastradas!</strong>
          <span className='text-lg'>Crie novas tarefas e organize seus afazeres</span>
        </div>
        )}
      </div>
  )
}

