export default function Button({name}) {
  return (
    <>
        <button className="float-right mt-2 p-2 bg-yellow-400 rounded-lg">
            <h1 className="font-medium">{name}</h1>
        </button>
    </>
  )
}
