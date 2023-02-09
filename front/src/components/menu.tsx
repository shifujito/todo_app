import { Recipe } from "./recipe";

import type { RecipeProps } from "./recipe";

export type MenuProps = {
  title: string;
  recipes: RecipeProps[];
};

export const Menu: React.FC<MenuProps> = ({ recipes, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </div>
  );
};
