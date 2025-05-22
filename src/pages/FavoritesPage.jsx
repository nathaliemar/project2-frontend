import { useEffect, useState } from "react";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { useIntRecipeService } from "../services/int-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { RecipeCard } from "../components/RecipeCard";
import { LoadingScreen } from "../components/LoadingScreen";

export function FavoritesPage() {
  const [recipes, setRecipes] = useState([]);
  const { putFavorites, response: putResponse } = useIntRecipeService();
  const { deleteFavorites, response: deleteFavResponse } =
    useIntRecipeService();
  const { getFavorites, response: getFavResponse } = useIntRecipeService();
  const {
    response: getAllResponse,
    error: getAllError,
    loading: getAllLoading,
    getAllExtRecipes,
  } = useExtRecipeService();

  const extRecipes = getAllResponse?.data.recipes || [];
  const allFavorites = getFavResponse?.data;
  useEffect(() => {
    getAllExtRecipes();
    getFavorites();
  }, []);

  useEffect(() => {
    if (extRecipes && allFavorites) {
      console.log("ext!!", extRecipes);
      console.log("ext!!", allFavorites);
      const newArr = extRecipes.map((recipe) => {
        for (const fav of allFavorites) {
          if (fav.item_id === recipe.id) {
            return {
              ...recipe,
              isFavorite: true,
              favId: fav.id,
            };
          }
        }
        return {
          ...recipe,
          isFavorite: false,
        };
      });
      setRecipes(newArr);
    }
  }, [extRecipes, allFavorites]);

  console.log(getFavResponse);
  if (getAllLoading) return <LoadingScreen />;
  if (getAllError) return <p>Oops, there has been an issue</p>;
  const handleSave = async (id) => {
    try {
      const resp = await putFavorites(id);
      console.log("Favorite added successfully", resp);
      getAllExtRecipes();
      getFavorites();
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async (id) => {
    try {
      const resp = await deleteFavorites(id);
      console.log("Favorite deleted successfully", resp);
      getAllExtRecipes();
      getFavorites();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(putResponse);

  return (
    <div className="explore-page flex flex-col items-center justify-center min-h-screen">
      <PageHeadline text="Your saved recipes" />
      <div className=" grid grid-cols-3 gap-4 items-center justify-center mb-4">
        {recipes
          .filter((recipe) => recipe.isFavorite)
          .map(({ id, image, name, isFavorite, favId }) => {
            return (
              <RecipeCard
                key={id}
                image={image}
                name={name}
                id={id}
                onSave={handleSave}
                onRemove={handleRemove}
                isFavorite={isFavorite}
                favId={favId}
                origin="explore"
              />
            );
          })}
      </div>
    </div>
  );
}
