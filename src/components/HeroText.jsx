import { Link } from "react-router-dom";

export function HeroText({ image, headline, description, button, path }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{headline}</h1>
          <p className="mb-5">{description}</p>
          <Link to={path}>
            <button className="btn btn-primary">{button}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
