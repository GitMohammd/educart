import React from "react";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import NotFoundContent from "./NotFoundContent";

function NotFound() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <NotFoundContent />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
