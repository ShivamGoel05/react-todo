import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'

function App() {
  return (
    <div>
      <CssBaseline />
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <TodoList />
    </div>
  )
}

export default App