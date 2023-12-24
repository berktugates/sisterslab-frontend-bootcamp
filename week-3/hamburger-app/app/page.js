"use client";
import { useState } from "react";
import Button from "./components/Button";
import TopBread from "./components/TopBread";
import BottomBread from "./components/BottomBread";
export default function Home() {
  const [ingredients, setIngredients] = useState([
    {
      name: "Tomato",
      price: "0.75£",
    },
    {
      name: "Ranch Sauce",
      price: "0.25£",
    },
    {
      name: "Meatball",
      price: "4.75£",
    },
    {
      name: "Lettuce",
      price: "0.75£",
    },
  ]);
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-gray-100 p-3 me-2" id="ingredients">
          <h1 className="text-center mb-2 text-2xl font-semibold">
            Ingredients
          </h1>
          <hr></hr>
          <ul>
            {ingredients.map((ingredient, index) => {
              return (
                <div className="flex mt-2">
                  <li className="bg-gray-200 mb-2 p-2" key={index}>
                    {ingredient.name} | {ingredient.price}
                  </li>
                  <Button name={"Add"} />
                  <Button name={"Remove"} />
                </div>
              );
            })}
          </ul>
        </div>
        <div id="breads" className="w-1/4">
          <TopBread/>
          <BottomBread/>
        </div>
      </div>
    </>
  );
}
