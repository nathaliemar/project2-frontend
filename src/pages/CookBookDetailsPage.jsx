import { useNavigate, useParams } from "react-router-dom";
import { PageHeadline } from "../components/PageHeadline";
import { RecipeDetails } from "../components/RecipeDetails";
import { useIntRecipeService } from "../services/int-recipe-service";
import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import { RecipeForm } from "../components/RecipeForm";

export function CookBookDetailsPage() {
  const { recipeId } = useParams();
  const [editFormVisible, setEditFormVisible] = useState(false);
  const navigate = useNavigate();
  const {
    response: getIntRecipeResponse,
    error: getIntRecipeError,
    loading: getIntRecipeLoading,
    getIntRecipeById,
    deleteIntRecipe,
    putIntRecipe,
  } = useIntRecipeService();

  useEffect(() => {
    getIntRecipeById(recipeId);
  }, []);

  if (getIntRecipeLoading) return <LoadingScreen />;
  if (getIntRecipeError) return <p>Oops, there has been an issue</p>;
  if (!getIntRecipeResponse) return <p>No data available</p>;
  const intRecipe = getIntRecipeResponse?.data;

  // Handle delete
  const handleDelete = async (id) => {
    try {
      const resp = await deleteIntRecipe(id);
      console.log("Deletion Successful", resp);
      navigate("/cookbook");
    } catch (err) {
      console.log(err);
    }
  };
  //Toggle Form visible
  const handleEdit = () => setEditFormVisible(!editFormVisible);
  // TODO PATCH to int DB
  const handleSubmitEdits = async (formData) => {
    //transform formData to match syntax of API
    const reqBody = {
      name: formData.name,
      userId: formData.author,
      image: formData.imageUrl,
      ingredients: Array.isArray(formData.ingredients)
        ? formData.ingredients // Use as-is if it's already an array
        : formData.ingredients.split(","), // Split if it's a string
      instructions: Array.isArray(formData.instructions)
        ? formData.instructions
        : formData.instructions.split(","),
      prepTimeMinutes: formData.prepTime,
      cookingTime: formData.cookingTime,
      servings: formData.servings,
      caloriesPerServing: formData.calories,
      difficulty: formData.difficulty,
      id: recipeId, //add id since otherwise no matching
    };

    //Send form data to API

    try {
      const response = await putIntRecipe(reqBody);
      console.log("recipe added successfully", response);
      //TODO Add user-facing success message
      navigate(`/cookbook/${recipeId}`);
    } catch (error) {
      console.log("error adding recipe", error);
    }
  };
  return (
    <div className="cookbook-details-page">
      <PageHeadline text={intRecipe.name} />
      <RecipeDetails {...getIntRecipeResponse.data} />
      <div className="m-4 flex flex-row justify-center items-center gap-4">
        <button className="btn btn-primary" onClick={handleEdit}>
          {editFormVisible ? "Hide Edit Form" : "Edit recipe"}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleDelete(recipeId)}
        >
          Delete Recipe
        </button>
      </div>
      <div className="flex flex-row justify-center items-center">
        {editFormVisible && (
          <RecipeForm
            mode="edit"
            recipe={intRecipe}
            onSubmit={handleSubmitEdits}
          />
        )}
      </div>
    </div>
  );
}

//GET favorites & check if id is in favorites -> if so set external to true
//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const favorites = await getFavorites();
//         const found = favorites.some(
//           (fav) => fav.item_id === parseInt(recipeId)
//         );
//         setIsExternal(found); //if found is false, external is false
//       } catch (err) {
//         console.log("error fetching favorites", err);
//       }
//     };
//     fetchFavorites();
//   }, [recipeId, getFavorites]);

//   //If external recipe, get data from ext.
//   //If internal recipe, get data from internal

//   useEffect(() => {
//     if (isExternal === null) return; //don't start w/o the favCheck being done
//     const fetchRecipeData = async () => {
//       try {
//         if (isExternal) {
//           const extRecipe = await getExtRecipeById(recipeId);
//           setRecipeData(extRecipe.data);
//         } else {
//           const intRecipe = await getIntRecipeById(recipeId);
//           setRecipeData(intRecipe.data);
//         }
//       } catch (error) {
//         console.log("error fetching recipe data", error);
//       }
//     };
//     fetchRecipeData();
//   }, [isExternal, recipeId, getExtRecipeById, getIntRecipeById]);
