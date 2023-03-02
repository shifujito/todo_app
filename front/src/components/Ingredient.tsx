export type IngredientProps = {
  amount: number;
  measurement: string;
  name: string;
};

const Ingredient: React.FC<IngredientProps> = ({
  amount,
  measurement,
  name,
}) => {
  return (
    <li>
      {amount} {measurement} {name}
    </li>
  );
};

export default Ingredient;
