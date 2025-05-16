import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  HomePage,
  CookbookPage,
  ExplorePage,
  AddRecipePage,
  AboutPage,
} from "./pages";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/cookbook" element={<CookbookPage />} />
          <Route path="/cookbook/add" element={<AddRecipePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
