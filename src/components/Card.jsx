export function Card(props) {
  return (
    <div className="card bg-base-100 w-96 shadow-md">
      <div className="card-body min-h-30">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <figure>
        <img
          src={props.image}
          alt={`image of ${props.title}`}
          className="max-h-50 w-full object-cover"
        />
      </figure>
    </div>
  );
}
