import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import AskedQuestion from "../contactPage1/AskedQuestion";
import ContactPage2Header from "./ContactPage2Header";
import OurOffice from "./OurOffice";

function ContactPage2() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <ContactPage2Header />
            <OurOffice />
            <AskedQuestion />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ContactPage2;
