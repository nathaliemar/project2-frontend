import { Link } from "react-router-dom";

export function CookBookRecipeCard({ image, name, id }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm flex items-center justify-center">
      <Link to={`/cookbook/${id}`}>
        <figure>
          <img
            className="object-cover aspect-square"
            src={image}
            alt={`Image of ${{ name }}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </Link>
    </div>
  );
}
