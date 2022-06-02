import React, { useState } from "react";
function NewRecipe({ onAddRecipe }) {
  const [ingredients, setIngredient] = useState("");
  const [duration, setDuration] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [substitution, setSubstitution] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("localhost:9292", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredients,
        duration: duration,
        difficulty: difficulty,
        substitution: substitution,
      }),
    })
      .then((r) => r.json())
      .then((newRecipe) => onAddRecipe(newRecipe));
  }
  return (
    <div className="new-recipe">
      <h2>New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ingredients="ingredients"
          placeholder="Ingredients for recipe"
          value={ingredients}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration of recipe"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty of recipe"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        />
        <input
          type="text"
          name="substitution"
          placeholder="Substitution for recipe"
          value={substitution}
          onChange={(e) => setSubstitution(e.target.value)}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
export default NewRecipe;
