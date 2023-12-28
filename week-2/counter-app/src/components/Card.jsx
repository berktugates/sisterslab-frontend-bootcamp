import { useState } from "react"

const Card = () => {
const [counter,setCounter] = useState(0)

const decreaseFunc = () =>{
    setCounter(counter -1)
}

const increaseFunc = () =>{
    setCounter(counter + 1)
}

  return (
    <>
        <div id="card" className="bg-gray-200 rounded-lg border-gray-400 p-4">
            <h1 className=" text-2xl font-bold text-center mb-4"> Counter : {counter} </h1>
            <button className="bg-gray-400 me-4 p-2 rounded-lg text-gray-800 hover:bg-gray-600 hover:text-gray-200" onClick={decreaseFunc}>Decrease</button>
            <button className="bg-gray-400 p-2 rounded-lg text-gray-800 hover:bg-gray-600 hover:text-gray-200" onClick={increaseFunc}>Increase</button>
        </div>
    </>
  )
}

export default Card