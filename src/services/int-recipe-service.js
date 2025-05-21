import useFetch from "../hooks/useFetch";

export const useIntRecipeService = () => {
  const API_URL = import.meta.env.VITE_API_URL; //has 2 endpoints
  const { data: response, error, loading, fetcher } = useFetch(API_URL);

  //GET all recipes
  const getAllIntRecipes = () => fetcher({ endPoint: "/recipes" });

  //GET recipe by id
  const getIntRecipeById = (recipeId) => {
    console.log("fetching recipe with id:", recipeId);
    return fetcher({ endPoint: "/recipes/" + recipeId });
  };

  //POST new recipe w/o ID
  const postIntRecipe = (requestBody) => {
    return fetcher({
      method: "POST",
      endPoint: "/recipes",
      reqBody: requestBody,
    });
  };

  //DELETE recipe w/ ID
  const deleteIntRecipe = async (recipeId) => {
    return fetcher({
      method: "DELETE",
      endPoint: "/recipes/" + recipeId,
    });
  };
  //PUT edited recipe
  const putIntRecipe = async (reqBody) => {
    return fetcher({
      method: "PUT",
      endPoint: "/recipes/" + reqBody.id,
      reqBody: reqBody,
    });
  };

  //PUT add recipe to favorites
  const putFavorites = async (recipeId) => {
    return fetcher({
      method: "POST",
      endPoint: "/favorites",
      reqBody: { item_id: recipeId },
    });
  };

  //DELETE recipe from favorites
  const deleteFavorites = async (favId) => {
    return fetcher({
      method: "DELETE",
      endPoint: "/favorites/" + favId,
    });
  };

  //GET favorite recipe IDs
  const getFavorites = () => fetcher({ endPoint: "/favorites" });

  return {
    response,
    error,
    loading,
    getAllIntRecipes,
    getIntRecipeById,
    putIntRecipe,
    postIntRecipe,
    putFavorites,
    getFavorites,
    deleteFavorites,
    deleteIntRecipe,
    // getExtRecipeById: (id) => useFetch("https://dummyjson.com/recipes/" + id),
  };
};
