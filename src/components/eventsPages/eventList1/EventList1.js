import React, { useEffect } from "react";
import SubNav from "../../shared/SubNav";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import EventList1Content from "./EventList1Content";
import EventList1Header from "./EventList1Header";

function EventList1() {
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
            <EventList1Header />
            <EventList1Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default EventList1;
