import { Route, Routes } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
