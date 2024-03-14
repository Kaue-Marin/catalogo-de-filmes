import { useState } from "react";
import logo from "./assets/logo-(1).png";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo da loja" />
        </div>

        <nav>
          <ul>
            <Link to={"/home"} className="link">
              home
            </Link>
            <Link to={"/shop"} className="link">
              shop
            </Link>
            <Link to={"/blog"} className="link">
              blog
            </Link>
            <Link to={"/about"} className="link">
              about
            </Link>
            <Link to={"/contact"} className="link">
              contact
            </Link>
          </ul>
        </nav>

        <div className="profile">
          <button className="btn">
            <Link to={"/signUp"}>Create account</Link>
          </button>
          <button className="btnLogin">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default App;
