import { useFetch } from "../hooks/useFetch";

export const extRecipeService = () => {
  return {
    getAllExtRecipes: () => useFetch("https://dummyjson.com/recipes"),
    getExtRecipeById: (id) => useFetch("https://dummyjson.com/recipes/" + id),
  };
};
