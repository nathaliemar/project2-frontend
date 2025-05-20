export function RecipeDetails({
  image,
  name,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  difficulty,
  caloriesPerServing,
  ingredients,
  instructions,
}) {
  return (
    <div className="recipe-details">
      <img src={image} alt={`Photo of ${name}`} />
      <div>
        Key facts
        <ul>
          <li>Preparation time: {prepTimeMinutes} min</li>
          <li>Cooking time: {cookTimeMinutes} min</li>
          <li>Difficulty: {difficulty}</li>
          <li>Serves {servings}</li>
          <li>{caloriesPerServing} kcal per serving</li>
        </ul>
      </div>
      <ul className="list-disc list-inside">
        Ingredients
        {ingredients &&
          ingredients.length &&
          ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
      </ul>

      <ol className="list-decimal list-inside">
        Instructions
        {instructions &&
          instructions.length &&
          instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </div>
  );
}
