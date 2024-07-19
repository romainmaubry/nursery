import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx"
import ProductListing from "./ProductListing.jsx"
import Cart from "./Cart.jsx"
import NoPage from "./NoPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="productListing" element={<ProductListing />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
