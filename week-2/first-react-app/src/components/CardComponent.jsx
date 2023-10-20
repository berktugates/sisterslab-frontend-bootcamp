const CardComponent = () => {
    const customer = 
        {
            name : "Berktug",
            surname : "Ates",
            age : 22
        }
    ;
  return (
    <>
        <div className='bg-gray-200 w-1/4 rounded-lg mt-3 ms-3 p-3 border shadow-lg'>
            <h1>Name : {customer.name}</h1>
            <h2>Surname : {customer.surname}</h2>
            <p>Age : {customer.age}</p>
        </div>
    </>
  )
}

export default CardComponent
