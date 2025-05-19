import { HeroText } from "../components/HeroText";

export function AboutPage() {
  return (
    <HeroText
      image="https://images.unsplash.com/photo-1743684456567-a3d32dbf702e?q=80&w=3168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      headline="Cooking made easy"
      description="getCooked is your go-to platform for discovering and sharing amazing
             recipes. What started as a side-project to help us be more creative
             in the kitchen turned into a database and cookbook for everyone!
           Thank you for being part of our culinary journey!"
      button="Get Started"
      path={"/"}
    />
  );
}
