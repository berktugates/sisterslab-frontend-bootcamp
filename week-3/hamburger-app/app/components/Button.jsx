export default function Button ({name,ingredientName,ingredientPrice,addIngredient,removeIngredient}) {
  if(name === "Add"){
    return <button className="bg-green-500 mb-2 p-2 text-white rounded-lg ms-2" onClick={()=>{addIngredient(ingredientName,ingredientPrice)}}>{name}</button>
  }
  else if (name === "Remove"){
    return <button className="bg-red-500 mb-2 p-2 text-white rounded-lg ms-2" onClick={()=>{removeIngredient(ingredientName,ingredientPrice)}}>{name}</button>
  }
}
