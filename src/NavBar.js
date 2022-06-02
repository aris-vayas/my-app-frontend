//contains search and routes for Ingredients, home
//and New Recpie form
import React from "react";
import "./NavBar.css";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="topnav">
      <Search />
      <Link to="/">Home</Link>
      <Link to="/NewRecipe">NewRecipe</Link>

      <Link to="/Ingredient">Ingredients</Link>
    </div>
  );
}
