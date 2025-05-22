import { useEffect } from "react";
import { PageHeadline } from "../components/PageHeadline";
import { useIntRecipeService } from "../services/int-recipe-service";
import { LoadingScreen } from "../components/LoadingScreen";
import { CookBookRecipeCard } from "../components/CookBookRecipeCard";
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

  return (
    <div className="cookbook flex flex-col items-center justify-center min-h-screen">
      <PageHeadline text="Your cookbook" />
      <Link to={"/cookbook/add"}>
        <button className="btn btn-primary m-4">Add recipe</button>
      </Link>
      <div className=" grid grid-cols-3 gap-4 items-center justify-center mb-4">
        {allIntRecipes.map(({ id, image, name }) => {
          return (
            <CookBookRecipeCard key={id} image={image} name={name} id={id} />
          );
        })}
      </div>
    </div>
  );
}
