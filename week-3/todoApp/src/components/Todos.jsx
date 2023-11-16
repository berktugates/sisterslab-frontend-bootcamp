const Todos = ({todos}) => {
  return (
    <>
        <ul>
            {todos.map((todo,index)=>{
                return <li className="bg-pink-200 mb-1 p-2 rounded-lg h-full" key={index}>{todo}</li>
            })}
        </ul>
    </>
  )
}

export default Todos