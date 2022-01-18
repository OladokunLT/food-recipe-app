import React from "react";
import "../recipetile/recipetile.css";

function Recipetile({ recipe }) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile">
        <img
          className="recipeTile_image"
          src={recipe["recipe"]["image"]}
          alt="available recipe"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
        <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
      </div>
    // )
  );
}

export default Recipetile;
