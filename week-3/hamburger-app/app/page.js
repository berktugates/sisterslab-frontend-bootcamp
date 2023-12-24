"use client";
import { useState } from "react";
import TopBread from "./components/TopBread";
import BottomBread from "./components/BottomBread";
import IngredientsList from "./components/IngredientsList";
import Tomato from "./components/Tomato";
import RanchSauce from "./components/RanchSauce";
import Meatball from "./components/Meatball";
import Lettuce from "./components/Lettuce";
import Receipt from "./components/Receipt";
export default function Home() {
  const [ingredients, setIngredients] = useState([
    {
      id: 0,
      name: "Tomato",
      price: 0.75,
    },
    {
      id: 1,
      name: "Ranch Sauce",
      price: 0.25,
    },
    {
      id: 2,
      name: "Meatball",
      price: 4.75,
    },
    {
      id: 3,
      name: "Lettuce",
      price: 0.75,
    },
  ]);
  const [showComponents, setShowComponents] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  let addIngredient = (componentName, ingredientPrice) => {
    setShowComponents([...showComponents, componentName]);
    console.log(typeof ingredientPrice);
    setTotalCost(totalCost + ingredientPrice);
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 font-semibold text-3xl border-b-2 p-2">Hamburger App</h1>
        <div className="flex justify-center w-1/3">
          <div className="bg-gray-100 p-3 me-2 w-1/2" id="ingredients">
            <IngredientsList
              ingredients={ingredients}
              addIngredient={addIngredient}
            />
          </div>
          <div id="breads" className="w-1/2">
            <TopBread />
            {showComponents.map((component) => {
              switch (component) {
                case "Tomato":
                  return <Tomato />;
                case "Ranch Sauce":
                  return <RanchSauce />;
                case "Meatball":
                  return <Meatball />;
                case "Lettuce":
                  return <Lettuce />;
              }
            })}
            <BottomBread />
          </div>
        </div>
        <div id="total-cost">
          <Receipt
            totalCost={totalCost}
          />
        </div>
      </div>
    </>
  );
}
