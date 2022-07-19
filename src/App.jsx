import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import RecipesPage from "./components/pages/Recipes";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/recipes" element={<RecipesPage />} />
    </Routes>
  );
}
export default App;
