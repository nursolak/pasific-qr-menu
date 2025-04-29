import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AlcoholicDrinks from "./pages/AlcoholicDrinks";
import NonAlcoholicDrinks from "./pages/NonAlcoholicDrinks";
import Snacks from "./pages/Snacks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/drinks/alcoholic" element={<AlcoholicDrinks />} />
        <Route path="/drinks/non-alcoholic" element={<NonAlcoholicDrinks />} />
        <Route path="/drinks/snacks" element={<Snacks />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
