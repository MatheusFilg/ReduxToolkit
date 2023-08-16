import { CheckIcon, Trash2 } from "lucide-react"
import { useDispatch,  } from "react-redux"
import { remove, } from "../store/slices/todo";
import * as Checkbox from '@radix-ui/react-checkbox';

interface TodoCardProps {
  text: string
  id: number
}

export default function TodoCard({ text, id }: TodoCardProps) {
  const dispatch = useDispatch()

  function handleDeleteTask() {
    dispatch(remove({
      id
    }))
  }

  return (
    <div className="flex flex-row h-24 w-[640px] p-4 items-center justify-between text-salmon-50 bg-gray-500 border-2 border-gray-800 rounded-lg">
      <div className="flex flex-row gap-4 align-middle justify-center w-screen" >
        <div className="flex items-center focus:outline-none">
          <Checkbox.Root
          className="flex h-[25px] w-[25px] items-center justify-center rounded-2xl bg-gray-800 hover:bg-gray-600 shadow focus:shadow-small focus:shadow-yellow-600 border-2 border-solid border-gray-800 focus:border-none focus:outline-none"
          >
          <Checkbox.Indicator>
            <CheckIcon className='text-yellow-600' size={20}  />
            </Checkbox.Indicator>
          </Checkbox.Root>
    </div>
        <p className="text-lg text-salmon-50 truncate overflow-elipsis w-[510px] text-justify">
          {text}
        </p>
      </div>
      
      <div>
        <button 
          className="text-salmon-600 hover:text-salmon-400 shadow focus:rounded-sm focus:p-[1px] focus:shadow-small focus:shadow-salmon-600 focus:outline-none"
          onClick={() => handleDeleteTask()}
        >
          <Trash2 className=""/>
        </button>
      </div>
    </div>
  )
} 