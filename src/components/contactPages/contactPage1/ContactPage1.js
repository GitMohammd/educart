import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import AskedQuestion from "./AskedQuestion";
import ContentMain from "./ContentMain";

function ContactPage1() {
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
            {/* map */}
            <section class="">
              <div id="map" className="map"></div>
            </section>
            <ContentMain />
            <AskedQuestion />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ContactPage1;
