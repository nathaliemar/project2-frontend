//###VERSION 01####//

import { useNavigate, useParams } from "react-router-dom";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { useEffect } from "react";
import { RecipeDetails } from "../components/RecipeDetails";

export function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const {
    response: getExtRecipeResponse,
    error: getExtRecipeError,
    loading: getExtRecipeLoading,
    getExtRecipeById,
  } = useExtRecipeService();

  useEffect(() => {
    getExtRecipeById(recipeId);
  }, []);

  if (getExtRecipeLoading) return <p>Loading...</p>;
  if (getExtRecipeError) return <p>Oops, there has been an issue</p>;
  if (!getExtRecipeResponse) return <p>No data available</p>;
  const { name } = getExtRecipeResponse.data;
  console.log("Extrecipedata:", getExtRecipeResponse);

  return (
    <div className="recipe-page">
      <PageHeadline text={name} />
      <div className="flex justify-center items-center">
        <button onClick={() => navigate(-1)} className="btn btn-primary m-4">
          Go Back
        </button>
      </div>
      <RecipeDetails {...getExtRecipeResponse.data} />
    </div>
  );
}

// import { useLocation, useParams } from "react-router-dom";
// import { PageHeadline } from "../components/PageHeadline";
// import { RecipeDetails } from "../components/RecipeDetails";
// import { useIntRecipeService } from "../services/int-recipe-service";
// import { useEffect, useState, useCallback } from "react";
// import { useExtRecipeService } from "../services/ext-recipe-service";

// export function RecipeDetailsPage() {
//   const { recipeId } = useParams();
//   const location = useLocation();
//   const origin = location.state?.origin || "unknown"; // Retrieve the origin from state

//   const [recipeData, setRecipeData] = useState(null);

//   const { getFavorites, getIntRecipeById } = useIntRecipeService();
//   const { getExtRecipeById } = useExtRecipeService();

//   // Wrap functions in useCallback to ensure stable references
//   const fetchFavorites = useCallback(async () => {
//     try {
//       const favorites = await getFavorites();
//       return favorites.some((fav) => fav.item_id === parseInt(recipeId));
//     } catch (error) {
//       console.error("Error fetching favorites:", error);
//       return false;
//     }
//   }, [getFavorites, recipeId]);

//   const fetchRecipeData = useCallback(async () => {
//     try {
//       if (origin === "explore") {
//         // Directly fetch external recipe data
//         const extRecipe = await getExtRecipeById(recipeId);
//         console.log("External Recipe Response:", extRecipe);
//         if (extRecipe && extRecipe.data) {
//           setRecipeData(extRecipe.data);
//         } else {
//           console.error("Invalid external recipe response:", extRecipe);
//         }
//       } else if (origin === "cookbook") {
//         // Check if the recipe is in favorites
//         const isExternal = await fetchFavorites();

//         // Fetch data based on whether the recipe is external or internal
//         if (isExternal) {
//           const extRecipe = await getExtRecipeById(recipeId);
//           console.log("External Recipe Response:", extRecipe);
//           if (extRecipe && extRecipe.data) {
//             setRecipeData(extRecipe.data);
//           } else {
//             console.error("Invalid external recipe response:", extRecipe);
//           }
//         } else {
//           const intRecipe = await getIntRecipeById(recipeId);
//           console.log("Internal Recipe Response:", intRecipe);
//           if (intRecipe && intRecipe.data) {
//             setRecipeData(intRecipe.data);
//           } else {
//             console.error("Invalid internal recipe response:", intRecipe);
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching recipe data:", error);
//     }
//   }, [origin, recipeId, fetchFavorites, getExtRecipeById, getIntRecipeById]);

//   useEffect(() => {
//     fetchRecipeData();
//   }, [fetchRecipeData]);

//   if (!recipeData) return <p>Loading...</p>;

//   return (
//     <div className="recipe-details-page">
//       <PageHeadline text={recipeData.name} />
//       <RecipeDetails {...recipeData} />
//     </div>
//   );
// }

//V03
//  import { useLocation, useParams } from "react-router-dom";
// import { PageHeadline } from "../components/PageHeadline";
// import { RecipeDetails } from "../components/RecipeDetails";
// import { useIntRecipeService } from "../services/int-recipe-service";
// import { useEffect, useState } from "react";
// import { useExtRecipeService } from "../services/ext-recipe-service";

// export function RecipeDetailsPage() {
//   const { recipeId } = useParams();
//   const location = useLocation();
//   const origin = location.state?.origin || "unknown"; // Retrieve the origin from state

//   const [recipeData, setRecipeData] = useState(null);

//   const { getFavorites, getIntRecipeById } = useIntRecipeService();
//   const { getExtRecipeById } = useExtRecipeService();
//   console.log(origin);

//   useEffect(() => {
//     const fetchRecipeData = async () => {
//       try {
//         if (origin === "explore") {
//           // Directly fetch external recipe data
//           const extRecipe = await getExtRecipeById(recipeId);
//           console.log("External Recipe Response:", extRecipe);
//           if (extRecipe && extRecipe.data) {
//             setRecipeData(extRecipe.data);
//           } else {
//             console.error("Invalid external recipe response:", extRecipe);
//           }
//         } else if (origin === "cookbook") {
//           // Check if the recipe is in favorites
//           const favorites = await getFavorites();
//           const isExternal = favorites.some(
//             (fav) => fav.item_id === parseInt(recipeId)
//           );

//           // Fetch data based on whether the recipe is external or internal
//           if (isExternal) {
//             const extRecipe = await getExtRecipeById(recipeId);
//             console.log("External Recipe Response:", extRecipe);
//             if (extRecipe && extRecipe.data) {
//               setRecipeData(extRecipe.data);
//             } else {
//               console.error("Invalid external recipe response:", extRecipe);
//             }
//           } else {
//             const intRecipe = await getIntRecipeById(recipeId);
//             console.log("Internal Recipe Response:", intRecipe);
//             if (intRecipe && intRecipe.data) {
//               setRecipeData(intRecipe.data);
//             } else {
//               console.error("Invalid internal recipe response:", intRecipe);
//             }
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching recipe data:", error);
//       }
//     };

//     fetchRecipeData();
//   }, [origin, recipeId, getFavorites, getExtRecipeById, getIntRecipeById]);
//   if (!recipeData) return <p>Loading...</p>;

//   return (
//     <div className="recipe-details-page">
//       <PageHeadline text={recipeData.name} />
//       <RecipeDetails {...recipeData} />
//     </div>
//   );
// }

// ### VERSION 02
// import { useLocation, useParams } from "react-router-dom";
// import { PageHeadline } from "../components/PageHeadline";
// import { RecipeDetails } from "../components/RecipeDetails";
// import { useIntRecipeService } from "../services/int-recipe-service";
// import { useEffect, useState } from "react";
// import { useExtRecipeService } from "../services/ext-recipe-service";

// export function RecipeDetailsPage() {
//   const { recipeId } = useParams();
//   // const [isExternal, setIsExternal] = useState(null);
//   const [recipeData, setRecipeData] = useState(null);

//   const location = useLocation();
//   const origin = location.state?.origin || "unknown"; // Retrieve the origin from state from RecipeCard Details btn

//   // not destructuring response etc here directly, since we make multiple calls and use multiple services
//   const {
//     getFavorites,
//     getIntRecipeById,
//   } = useIntRecipeService();

//   const { getExtRecipeById } = useExtRecipeService();

//   //FULL LOGIC:
//   //Origin from Explore/cookbook passed on to RecipeCard/passed on via Link's state
//     //if origin===explore
//       //directly getExtRecipeById
//     //if origin === cookbook
//       //check if recipe in favorites
//         //if yes, getExtRecipeById
//         //if no, getIntRecipeById

//   //GET favorites & check if id is in favorites -> if so set external to true
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

//   return (
//     <div className="cookbook-details-page">
//       <PageHeadline text={recipeData.name} />
//       <RecipeDetails />
//     </div>
//   );
// }
