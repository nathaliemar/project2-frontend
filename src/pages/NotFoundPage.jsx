import { Link } from "react-router-dom";
import { HeroText } from "../components/HeroText";

export function NotFoundPage() {
  return (
    <HeroText
      image="https://images.unsplash.com/photo-1633253037482-42b88325b64c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"
      headline="Page not found :("
      description="The page you are looking for does not exist"
      button="Go Home"
      path={"/"}
    />
  );
}
