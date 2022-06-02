import React, { useState } from "react";

function RecipeCard({ item }) {
  // <>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>
  //   <br></br>

  //   <br></br>
  //   <br></br>
  // </>
  function handleDelete(e) {
    console.log("delete click works", e.target.value);
  }
  return (
    <>
      <br></br>
      <div className="card">
        <h1>Recipe Name: {item.name}</h1>
        <h2>Vegetable: {item.vegetable}</h2>
        <h2>Fish: {item.fish}</h2>
        <h2> Fruit: {item.fruit}</h2>
        <h2>Spice:{item.spice}</h2>
        <h2>Cook Time {item.cook_time} minutes</h2>
        <h2>Random Ingredient {item.ingredient}</h2>

        <button
          value={item.id}
          onClick={(e) => handleDelete(e)}
          className="del-btn"
        >
          Delete Recipe
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default RecipeCard;
