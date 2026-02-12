import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import ChiSiamoPage from "./pages/ChiSiamoPage.jsx"
import ProductsPage from "./pages/ProductsPage.jsx"
import ProductDetailPage from "./pages/ProductDetailPages.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
        <Route path="/prodotti/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App;