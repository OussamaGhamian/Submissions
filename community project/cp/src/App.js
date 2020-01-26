import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/index";
import News from "./components/News";
import ContactUs from "./components/contactUs";
import "./App.css";
//importing images
import fbIcn from "./img/fbIcon.png";
import ytIcn from "./img/ytIcon.png";
import igIcn from "./img/instaIcon.png";
import tyIcn from "./img/twtIcon.png";
import sideImg from "./img/hero.jpeg";
import students from "./img/flat-people-going-university-collection.jpg";
import uniStdnt from "./img/group-people-reading-borrowing-books.jpg";
import workshop from "./img/workshops.jpg";
import grad from "./img/6.jpg";
import conf from "./img/conference.jpeg";
import volunteer from "./img/volunteers.jpg";
import join from "./img/joinTeam.jpeg";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="" Component={Main} exact={true} />

        <Route path="/NewsEvent.html" Component={News} />
        <Route path="/contactUs.html" Component={ContactUs} exact />
      </Switch>
    </BrowserRouter>
  );
}
