import Header from "./components/Header"
import Products from "./components/Products"
import NewProduct from "./components/NewProduct"
import EditProduct from "./components/EditProduct"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//REDUX
import { Provider } from "react-redux"
import store from "./store"


function App() {

  return (
    <Router>
      <Provider store={store} >
        <Header />

        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/products/new" element={<NewProduct />} />
            <Route exact path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  )
}

export default App
