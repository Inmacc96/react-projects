import Header from "./components/Header"
import Products from "./components/Products"
import NewProduct from "./components/NewProduct"
import EditProduct from "./components/EditProduct"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/new" element={<NewProduct />} />
          <Route exact path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
