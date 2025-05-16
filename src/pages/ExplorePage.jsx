import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { extRecipeService } from "../services/ext-recipe-service";

export function ExplorePage() {
  const { getAllExtRecipes } = extRecipeService();
  const {
    response: getAllResponse,
    error: getAllError,
    loading: getAllLoading,
  } = getAllExtRecipes();

  if (getAllLoading) return <p>Loading...</p>;
  if (getAllError) return <p>Oops, there has been an issue</p>;
  const extRecipes = getAllResponse?.recipes || [];

  console.log(getAllResponse);
  return (
    <div className="explore-page">
      <h2>Explore all recipes</h2>
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
