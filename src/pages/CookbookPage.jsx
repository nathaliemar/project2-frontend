import { useEffect } from "react";
import { PageHeadline } from "../components/PageHeadline";
import { useIntRecipeService } from "../services/int-recipe-service";
import { LoadingScreen } from "../components/LoadingScreen";
import { RecipeCard } from "../components/RecipeCard";
import { CookBookRecipeCard } from "../components/CookbookRecipeCard";
import { Link } from "react-router-dom";

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
  if (getAllIntError) {
    console.log("error from cookbookpage", getAllIntError);
    return <p>Oops, there has been an issue</p>;
  }
  const allIntRecipes = getAllIntResponse?.data || [];

  //TODO: needs to return saved external recipes as well
  //TODO: Add ext map + API calls

  return (
    <div className="cookbook flex flex-col items-center justify-center min-h-screen">
      <PageHeadline text="Your cookbook" />
      <Link to={"/cookbook/add"}>
        <button className="btn btn-primary m-4">Add recipe</button>
      </Link>
      <div className=" grid grid-cols-3 gap-4 items-center justify-center">
        {allIntRecipes.map(({ id, image, name }) => {
          return (
            <CookBookRecipeCard key={id} image={image} name={name} id={id} />
          );
        })}
      </div>
    </div>
  );
}
