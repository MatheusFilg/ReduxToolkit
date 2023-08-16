import { Todo } from './pages/Todo'
import { Provider as ReduxProvider } from 'react-redux'
import './styles/global.css'
import { store } from './store'

export function App() {
  
  return (
    <ReduxProvider store={store}>
      <Todo/>
    </ReduxProvider>
  )
}
