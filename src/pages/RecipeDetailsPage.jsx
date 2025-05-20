import { useParams } from "react-router-dom";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { useEffect } from "react";

export function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const {
    response: getExtRecipeResponse,
    error: getExtRecipeError,
    loading: getExtRecipeLoading,
    getExtRecipeById,
  } = useExtRecipeService();

  useEffect(() => {
    console.log("huhu");
    getExtRecipeById(recipeId);
  }, []);

  console.log("API response:", getExtRecipeResponse);

  if (getExtRecipeLoading) return <p>Loading...</p>;
  if (getExtRecipeError) return <p>Oops, there has been an issue</p>;
  if (!getExtRecipeResponse) return <p>No data available</p>; //TODO: Check if needed elsewhere
  const {
    name,
    image,
    prepTimeMinutes,
    difficulty,
    servings,
    caloriesPerServing,
    cookTimeMinutes,
    ingredients,
    instructions,
  } = getExtRecipeResponse.data;

  return (
    <div className="recipe-page">
      <PageHeadline text={name} />
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
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>

      <ol className="list-decimal list-inside">
        Instructions
        {instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
