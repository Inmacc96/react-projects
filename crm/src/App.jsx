import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewCustomer from "./pages/NewCustomer";
import EditCustomer from "./pages/EditCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/customers" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="new" element={<NewCustomer />}/>
            <Route path="edit/:id" element={<EditCustomer />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
