import { useAppSelector } from "../store"

export default function Counter() {
  const tasks = useAppSelector((state) => {
    return  state.todoList.todo?.tasks
  })

  return (
  <div className="flex flex-row justify-between w-[630px] mt-24 mb-3">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-yellow-600">Tarefas Criadas</p>
        <span className="text-salmon-50 bg-gray-800 rounded-full py-1 px-2">{tasks && tasks.length}</span>
      </div>

    <div className="flex flex-row gap-2 items-center">
      <p className="text-yellow-600">Concluídas</p>
      <span className="text-salmon-50 bg-gray-800 rounded-full py-1 px-2">0 de {tasks && tasks.length}</span>
    </div>
  </div>
  )
}