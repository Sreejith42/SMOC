import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./content/Home/HomeComponent";
import GalleryComponent from "./content/Gallery/GalleryComponent";
import ContactUsComponent from "./content/ContactUs/ContactUsComponent";
import AboutUsComponent from "./content/AboutUs/AboutUsComponent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/Footer/FooterComponent";

const App = () => {
  return (
    <Router>
      <Suspense fallback="loading">
        <HeaderComponent />
        <section>
          <Switch>
            <Route exact path="/" render={() => <HomeComponent />} />            
            <Route path="/gallery" render={() => <GalleryComponent />} />
            <Route path="/contact-us" render={() => <ContactUsComponent />} />
            <Route path="/about-us" render={() => <AboutUsComponent />} />
          </Switch>
        </section>
        <FooterComponent />
      </Suspense>
    </Router>
  );
};

export default App;
