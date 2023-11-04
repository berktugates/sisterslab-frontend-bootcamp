const CardComponent = (props) => {
    const {name,surname,age} = props
  return (
    <>
        <div className='bg-gray-200 w-full rounded-lg mt-3 p-3 border shadow-lg hover:bg-gray-400 hover:scale-105 hover:ease-out duration-300'>
            <h1>Name : {name}</h1>
            <h2>Surname : {surname}</h2>
            <p>Age : {age}</p>
        </div>
    </>
  )
}

export default CardComponent
