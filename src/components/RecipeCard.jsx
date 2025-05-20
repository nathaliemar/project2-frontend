import { Link } from "react-router-dom";

export function RecipeCard({ image, name, id, onSave }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm flex items-center justify-center">
      <Link to={`/recipes/${id}`}>
        <figure>
          <img
            className="object-cover aspect-square"
            src={image}
            alt={`Image of ${{ name }}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Here tags</p>
        </div>
      </Link>
      <div className="card-actions justify-between">
        <Link to={`/recipes/${id}`} className="btn btn-primary m-2">
          Details
        </Link>
        <button
          //   Whole card is a link to details, except for Save btn -> separate handler
          // TODO hide save btn on cookbook
          onClick={(e) => {
            e.stopPropagation();
            if (onSave) onSave(id);
          }}
          className="btn btn-secondary m-2"
        >
          Save
        </button>
      </div>
    </div>
  );
}
