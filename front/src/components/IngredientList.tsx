import { IngredientType } from "../types";
import Ingredient from "./Ingredient";

type IngredientsListProps = {
  list: IngredientType[];
};

const IngredientsList: React.FC<IngredientsListProps> = ({ list }) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
};
