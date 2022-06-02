//Home page will house NAV BAR elements
import React, { useState, useEffect } from "react";

import RecipeCard from "./RecipeCard";
function Home() {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9292/recipes`)
      .then((r) => r.json())
      .then((recipe) => setRecipe(recipe));
  }, []);
  console.log(recipes);

  const recipecard = recipes.map((item) => {
    return <RecipeCard key={item.id} item={item} />;
  });

  return <>{recipecard}</>;
}
export default Home;
