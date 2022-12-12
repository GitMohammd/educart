import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import ShopCheckOutContent from "./ShopCheckOutContent";
import ShopCheckoutTitle from "./ShopCheckoutTitle";

function ShopCheckout() {
  useEffect(() => {
    {
      document.exitFullscreen();
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
            <ShopCheckoutTitle />
            <ShopCheckOutContent />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ShopCheckout;
