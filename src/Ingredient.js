//Renders a table with all ingredients to View with images
//Input new Ingredient
//import { useTable } from "react-table";
import { useState, useEffect } from "react";
function Ingredient() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/ingredients`)
      .then((r) => r.json())
      .then((ingredient) => setIngredients(ingredient));
  }, []);
  console.log(ingredients);

  function handleClick() {
    console.log("dd click");
  }
  return (
    <>
      <button onClick={handleClick}>Create New Ingredient</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <tbody>
        <tr>
          <th>Name</th>
        </tr>
        {ingredients.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Ingredient;
