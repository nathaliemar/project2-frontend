import { useFetch } from "../hooks/useFetch";

export const useExtRecipeService = () => {
  const {
    data: response,
    error,
    loading,
    fetcher,
  } = useFetch("https://dummyjson.com/recipes");
  const getAllExtRecipes = () => fetcher();
  const getExtRecipeById = (id) => fetcher({ endPoint: "/" + id });

  return {
    response,
    error,
    loading,
    getAllExtRecipes,
    getExtRecipeById,
  };
};
