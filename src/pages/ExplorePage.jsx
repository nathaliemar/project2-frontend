import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { useEffect } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { LoadingScreen } from "../components/LoadingScreen";

export function ExplorePage() {
  const {
    response: getAllResponse,
    error: getAllError,
    loading: getAllLoading,
    getAllExtRecipes,
  } = useExtRecipeService();

  useEffect(() => {
    getAllExtRecipes();
  }, []);
  if (getAllLoading) return <LoadingScreen />;
  if (getAllError) return <p>Oops, there has been an issue</p>;
  const extRecipes = getAllResponse?.data.recipes || [];

  const handleSave = (id) => {
    console.log(`Saved recipe #${id}`);
  };
  return (
    <div className="explore-page flex flex-col items-center justify-center min-h-screen">
      <PageHeadline text="Explore all recipes" />
      <div className=" grid grid-cols-3 gap-4 items-center justify-center">
        {extRecipes.map(({ id, image, name }) => {
          return (
            <RecipeCard
              key={id}
              image={image}
              name={name}
              id={id}
              onSave={handleSave}
            />
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div className="explore-page">
  //     <PageHeadline text="Explore all recipes" />
  //     <div>
  //       {extRecipes.map((recipe) => {
  //         return (
  //           <Link key={recipe.id} to={"/recipes/" + recipe.id}>
  //             <Card title={recipe.name} image={recipe.image} />
  //           </Link>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
}
