import type { Ingredient } from "../types";

export type RecipeProps = {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
};

const Recipe: React.FC<RecipeProps> = ({ name, ingredients, steps }) => {
  return (
    <>
      <h1>{name}</h1>
      <ul className="ingredient">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <div className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </div>
    </>
  );
};

export default Recipe;
