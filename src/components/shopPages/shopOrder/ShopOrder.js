import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import ShopOrderTitle from "../shopOrder/ShopOrderTitle";
import ShopOrderContent from "./ShopOrderContent";

function ShopOrder() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <ShopOrderTitle />
            <ShopOrderContent />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ShopOrder;
