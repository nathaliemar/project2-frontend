import { PageHeadline } from "../components/PageHeadline";
import { RecipeForm } from "../components/RecipeForm";
import { useIntRecipeService } from "../services/int-recipe-service";

export function AddRecipePage() {
  const { postIntRecipe } = useIntRecipeService();
  //Add form submission handler
  const handleAddRecipe = async (formData) => {
    console.log(formData);
    //transform formData to match syntax of API
    const reqBody = {
      name: formData.name,
      userId: formData.author,
      image: formData.imageUrl,
      ingredients: formData.ingredients.split(","),
      instructions: formData.instructions.split(","),
      prepTimeMinutes: formData.prepTime,
      cookingTime: formData.cookingTime,
      servings: formData.servings,
      caloriesPerServing: formData.calories,
      difficulty: formData.difficulty,
    };

    //Send form data to API

    try {
      const response = await postIntRecipe(reqBody);
      console.log("recipe added successfully", response);
      //TODO Add user-facing success message
    } catch (error) {
      console.log("error adding recipe", error);
    }
  };

  return (
    <div className="add-recipe-page">
      <PageHeadline text="Add a new recipe" />
      <RecipeForm mode="add" onSubmit={handleAddRecipe} />
    </div>
  );
}
