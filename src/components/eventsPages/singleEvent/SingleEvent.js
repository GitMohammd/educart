import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import SingleEventBanner from "./SingleEventBanner";
import SingleEventContent from "./SingleEventContent";

function SingleEvent() {
  useEffect(() => {
    {
      document.exitFullscreen().catch((err) => Promise.resolve(err));
    }
    {
      document.documentElement.classList.remove("-dark-mode");
    }
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <SingleEventBanner />
            <SingleEventContent />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default SingleEvent;
