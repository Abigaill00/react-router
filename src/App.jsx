import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import ChiSiamo from "./pages/ChiSiamoPage"
import Products from ".pages/ProductsPage"
import Navbar from "./components/Navbar"

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/ChiSiamoPage" Component={ChiSiamo} />
      <Route path="/ProductsPage" Component={Products} />
    </Routes>
  </BrowserRouter>;
}
