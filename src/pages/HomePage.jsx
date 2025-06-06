import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <Link to={"/explore"}>
          <Card
            title="Explore Recipes"
            body="Discover your new favorite recipes from our extensive database"
            image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
        <Link to={"/favorites"}>
          <Card
            title="View Favorites"
            body="Check out your favorite recipes from our database"
            image="https://images.unsplash.com/photo-1676399628088-73d317f9fdf3?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
        <Link to={"/cookbook"}>
          <Card
            title="My cookbook"
            body="Browse the collection of your own recipes"
            image="https://images.unsplash.com/photo-1588960952097-4cf35f0a0306?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
        <Link to={"/cookbook/add"}>
          <Card
            title="Add recipe"
            body="Add a new recipe to your personal cookbook"
            image="https://images.unsplash.com/photo-1689023540541-59aa2513b750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
      </div>
    </div>
  );
}
