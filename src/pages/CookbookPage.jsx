import { useEffect } from "react";
import { PageHeadline } from "../components/PageHeadline";
import { useIntRecipeService } from "../services/int-recipe-service";
import { LoadingScreen } from "../components/LoadingScreen";
import { RecipeCard } from "../components/RecipeCard";

export function CookbookPage() {
  const {
    response: getAllIntResponse,
    error: getAllIntError,
    loading: getAllIntLoading,
    getAllIntRecipes,
  } = useIntRecipeService();

  useEffect(() => {
    getAllIntRecipes();
  }, []);

  if (getAllIntLoading) return <LoadingScreen />;
  if (getAllIntError) return <p>Oops, there has been an issue</p>;
  const allIntRecipes = getAllIntResponse?.data || [];

  return (
    <div className="cookbook flex flex-col items-center justify-center min-h-screen">
      <PageHeadline text="Your cookbook" />
      <div className=" grid grid-cols-3 gap-4 items-center justify-center">
        {allIntRecipes.map(({ id, image, name }) => {
          return <RecipeCard key={id} image={image} name={name} id={id} />;
        })}
      </div>
    </div>
  );
}
