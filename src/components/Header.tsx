import { ListChecks } from "lucide-react";
import AddTask from "./AddTask";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 bg-gray-500 items-center justify-center w-full h-48">
    <div className="flex flex-row align-middle relative -bottom-4 -left-12 items-center gap-4 text-salmon-600">
      <ListChecks size={46} />
      <span className="text-4xl font-sans">To-do</span>
    </div>
    <AddTask/>
  </div>
  )
}