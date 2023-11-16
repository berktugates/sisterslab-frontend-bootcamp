import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
import Todos from "./components/Todos"

function App() {
  const [text, setText] = useState(null)
  const [todos, setTodos] = useState([])
  const editTask = (e) => {
    setText(e.target.value)
  }
  const addTask = () =>{
    setTodos([...todos,text])
    setText("")
  }
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="bg-pink-300 p-8 rounded-lg">
          <h1 className="text-2xl font-semibold text-center mb-2">To-Do App</h1>
          <div className="flex justify-center items-center mb-2">
            <Input
              text = {text}
              onChange = {editTask}
            />
            <Button
              name = "Add"
              onClick = {addTask}
            />
          </div>
          <div>
              <Todos
                todos = {todos}
              />
          </div>
       </div>
      </div>
    </>
  )
}

export default App
