import { Menu } from "./menu";

import type { MenuProps } from "./menu";

type ingredientsProps = {
  title: string;
};

export const IngredientsList: React.FC<ingredientsProps> = ({ title }) => {
  const data = [
    {
      name: "Baked Salmon",
      ingredients: [
        { name: "Salmon", amount: 1, measurement: "l lb" },
        { name: "Pine Nuts", amount: 2, measurement: "cup" },
      ],
      steps: ["aaaa", "bbbb"],
    },
    {
      name: "Fish Tacos",
      ingredients: [
        { name: "Whitefish", amount: 1, measurement: "l lb" },
        { name: "Tomatoes", amount: 2, measurement: "large" },
      ],
      steps: ["cccc", "dddd"],
    },
  ];
  return <Menu recipes={data} title="ho" />;
};
