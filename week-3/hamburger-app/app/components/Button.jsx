export default function Button({ name,ingredientName,ingredientPrice,onClick }) {
  return (

    <>
      <button className="bg-orange-500 mb-2 p-2 text-white rounded-lg ms-2" onClick={()=>{onClick(ingredientName,ingredientPrice)}}>
        {name}
      </button>
    </>
  );
}
