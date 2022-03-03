import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from "./layout/LogIn";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LogIn />}>
            <Route index element={<LoginForm/>}/>
          </Route>

          <Route path="/customers" element={<Layout />}>
            <Route index element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
