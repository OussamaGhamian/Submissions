import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./index";
import News from "./News";
import Contact from "./contactUs";
import Footer from "./footer";

//importing images

export default function Header() {
  return (
    <>
      <HashRouter>
        <header>
          <nav>
            <span>EduMe</span>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
      <Footer />
    </>
  );
}
