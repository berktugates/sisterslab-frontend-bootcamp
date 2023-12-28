const Input = ({text,onChange}) => {
  return (
    <>
        <input className="w-full border border-pink-600 me-2 p-1 rounded-lg hover:border-pink-800" type="text" value={text} onChange={onChange}/>
    </>
  )
}

export default Input