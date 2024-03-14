import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import { Blog } from "./pages/Blog.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { SignUp } from "./pages/Sign-up.jsx";
import { Login } from "./pages/Login.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path={"signUp"} element={<SignUp />} />
        <Route path={"login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
