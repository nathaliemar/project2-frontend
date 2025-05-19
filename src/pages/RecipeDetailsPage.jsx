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
  if (!getExtRecipeResponse) return <p>No data available</p>; //? Not having this line caused issues, likely due to us attempting to access props before the api call was done

  return (
    <div className="recipe-page">
      <PageHeadline text={getExtRecipeResponse.name} />
      <img
        src={getExtRecipeResponse.image}
        alt={`Photo of ${getExtRecipeResponse.name}`}
      />
      <div>
        Key facts
        <ul>
          <li>Preparation time: {getExtRecipeResponse.prepTimeMinutes} min</li>
          <li>Cooking time: {getExtRecipeResponse.cookTimeMinutes} min</li>
          <li>Difficulty: {getExtRecipeResponse.difficulty}</li>
          <li>Serves {getExtRecipeResponse.servings}</li>
          <li>{getExtRecipeResponse.caloriesPerServing} kcal per serving</li>
        </ul>
      </div>
      <ul className="list-disc list-inside">
        Ingredients
        {getExtRecipeResponse.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>

      <ol className="list-decimal list-inside">
        Instructions
        {getExtRecipeResponse.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
