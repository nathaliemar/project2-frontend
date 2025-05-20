import { useParams } from "react-router-dom";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { useEffect } from "react";
import { RecipeDetails } from "../components/RecipeDetails";

export function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const {
    response: getExtRecipeResponse,
    error: getExtRecipeError,
    loading: getExtRecipeLoading,
    getExtRecipeById,
  } = useExtRecipeService();

  useEffect(() => {
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
      <RecipeDetails {...getExtRecipeResponse.data} />
    </div>
  );
}
