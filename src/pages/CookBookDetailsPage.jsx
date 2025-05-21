import { useParams } from "react-router-dom";
import { PageHeadline } from "../components/PageHeadline";
import { RecipeDetails } from "../components/RecipeDetails";
import { useIntRecipeService } from "../services/int-recipe-service";
import { useEffect } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

export function CookBookDetailsPage() {
  const { recipeId } = useParams();

  const {
    response: getIntRecipeResponse,
    error: getIntRecipeError,
    loading: getIntRecipeLoading,
    getIntRecipeById,
  } = useIntRecipeService();

  useEffect(() => {
    getIntRecipeById(recipeId);
  }, []);

  if (getIntRecipeLoading) return <LoadingScreen />;
  if (getIntRecipeError) return <p>Oops, there has been an issue</p>;
  if (!getIntRecipeResponse) return <p>No data available</p>;
  const { name } = getIntRecipeResponse.data;
  // const intRecipe=getIntRecipeResponse?.data

  return (
    <div className="cookbook-details-page">
      <PageHeadline text={name} />
      <RecipeDetails {...getIntRecipeResponse.data} />
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
