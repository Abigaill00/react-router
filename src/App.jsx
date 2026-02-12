import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"
import ChiSiamo from "./pages/ChiSiamoPage.jsx"
import Products from "./pages/ProductsPage.jsx"
import DefaultLayout from "./layouts/DefaultLayout.jsx";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/ChiSiamoPage" Component={ChiSiamo} />
          <Route path="/ProductsPage" Component={Products} />
        </Route>
      </Routes>
    </BrowserRouter>;h
    
  </>
}

export default App;