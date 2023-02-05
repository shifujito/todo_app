type ingredientsProps = {
    title: string;
}

export const IngredientsList: React.FC<ingredientsProps> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}
