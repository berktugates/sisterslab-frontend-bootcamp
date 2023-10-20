const CardComponent = (props) => {
    const {name,surname,age} = props
  return (
    <>
        <div className='bg-gray-200 w-1/4 rounded-lg mt-3 ms-3 p-3 border shadow-lg'>
            <h1>Name : {name}</h1>
            <h2>Surname : {surname}</h2>
            <p>Age : {age}</p>
        </div>
    </>
  )
}

export default CardComponent
