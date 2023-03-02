import React from "react";
import Recipe from "./Recipes";
import { RecipeProps } from "./Recipes";

type MenuProps = {
  recipes: RecipeProps[];
};

const Menu: React.FC<MenuProps> = ({ recipes }) => {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
};
export default Menu;
