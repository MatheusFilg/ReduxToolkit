import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useStore } from "../zustand-store";

export default function AddTask() {
  const { addTask } = useStore()
  const [newTask, setNewTask] = useState('')

  function handleNewTask(e: FormEvent) {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  return (
    <form 
    className="flex relative -bottom-16 px-16 gap-8 flex-row align-middle justify-center items-center"
    onSubmit={handleNewTask}
    >
    <input
      pattern="[a-zA-Z\u00C0-\u00FF]+[a-zA-Z\u00C0-\u00FF ]+"
      // restrigindo apenas para letras e permitindo espaços e alguns caracteres especiais
      type="text"
      placeholder="Adicione uma nova tarefa"
      className="h-12 w-[480px] bg-gray-600 rounded-lg placeholder-salmon-400 text-salmon-400 p-4 focus:shadow-salmon-600 shadow border-2 border-solid border-gray-700 focus:shadow-small focus:outline-none focus:border-none"
      required
      value={newTask}
      onChange={e => setNewTask(e.target.value)} 
    />
    {/* aqui eu preciso declarar que meu input tem o valor do estado inicial para que seja adicionado */}
    {/* e cada mudança atualiza o valor desse estado */}
  <button 
    className="flex flex-row justify-center items-center gap-1 p-2 h-14 w-32 text-salmon-400 text-base bg-gray-500 shadow border-solid border-gray-600 border-2 rounded-lg focus:outline-none focus:shadow-small focus:shadow-salmon-600 focus:border-none hover:bg-gray-450 delay-75">
      <Plus size={20} />
      Nova Tarefa
    </button>
  </form>
  )
}