import { useParams } from "react-router-dom";
import { extRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";

export function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const { getExtRecipeById } = extRecipeService();
  const {
    response: getExtRecipeResponse,
    error: getExtRecipeError,
    loading: getExtRecipeLoading,
  } = getExtRecipeById(recipeId);

  if (getExtRecipeLoading) return <p>Loading...</p>;
  if (getExtRecipeError) return <p>Oops, there has been an issue</p>;

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
      <p></p>
    </div>
  );
}
