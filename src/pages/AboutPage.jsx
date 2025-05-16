import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1743684456567-a3d32dbf702e?q=80&w=3168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Cooking made easy</h1>
          <p className="mb-5">
            getCooked is your go-to platform for discovering and sharing amazing
            recipes. What started as a side-project to help us be more creative
            in the kitchen turned into a database and cookbook for everyone!
            Thank you for being part of our culinary journey!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
