import Button from "./Button";

export default function IngredientsList({ ingredients,addIngredient }) {
   
  return (
    <>
      <h1 className="text-center mb-2 text-2xl font-semibold">Ingredients</h1>
      <hr></hr>
      <ul>
        {ingredients.map((ingredient, index) => {
          return (
            <div className="flex mt-2">
              <li className="bg-gray-200 mb-2 p-2" key={index}>
                {ingredient.name} | {ingredient.price}
              </li>
              <Button name={"Add"} index={index} onClick={addIngredient} ingredientName={ingredient.name} ingredientPrice={ingredient.price}/>
              <Button name={"Remove"} index={index} />
            </div>
          );
        })}
      </ul>
    </>
  );
}
