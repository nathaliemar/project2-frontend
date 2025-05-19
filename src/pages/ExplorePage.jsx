import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { useExtRecipeService } from "../services/ext-recipe-service";
import { PageHeadline } from "../components/PageHeadline";
import { useEffect } from "react";

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
  if (getAllLoading) return <p>Loading...</p>;
  if (getAllError) return <p>Oops, there has been an issue</p>;
  const extRecipes = getAllResponse?.recipes || [];

  return (
    <div className="explore-page">
      <PageHeadline text="Explore all recipes" />
      <div>
        {extRecipes.map((recipe) => {
          return (
            <Link key={recipe.id} to={"/recipes/" + recipe.id}>
              <Card title={recipe.name} image={recipe.image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
