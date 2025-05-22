import { Link } from "react-router-dom";

export function RecipeCard({
  image,
  name,
  id,
  onSave,
  onRemove,
  origin,
  isFavorite,
  favId,
}) {
  console.log("isFavvvvv", isFavorite);

  return (
    <div className="card bg-base-100 w-96 shadow-sm flex items-center justify-center">
      <Link to={`/recipes/${id}`} state={{ origin }}>
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

      <div className="card-actions justify-between mb-4">
        <Link
          to={`/recipes/${id}`}
          className="btn btn-primary m-2"
          state={{ origin }}
          // {/* state={{ origin: origin }} */}
        >
          Details
        </Link>
        <button
          //   Whole card is a link to details, except for Save btn -> separate handler
          onClick={(e) => {
            e.stopPropagation();
            isFavorite ? onRemove(favId) : onSave(id);
          }}
          className="btn btn-secondary m-2"
        >
          {isFavorite ? "Remove favorite" : "Save favorite"}
        </button>
      </div>
    </div>
  );
}
