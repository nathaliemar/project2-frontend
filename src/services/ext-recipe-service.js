import useFetch from "../hooks/useFetch";

export const useExtRecipeService = () => {
  const {
    data: response,
    error,
    loading,
    fetcher,
  } = useFetch("https://dummyjson.com/recipes");
  const getAllExtRecipes = () => fetcher({});
  const getExtRecipeById = (recipeId) => {
    console.log("fetching recipe with id:", recipeId);
    return fetcher({ endPoint: "/" + recipeId });
  };

  return {
    response,
    error,
    loading,
    getAllExtRecipes,
    getExtRecipeById,
    // getExtRecipeById: (id) => useFetch("https://dummyjson.com/recipes/" + id),
  };
};
