import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import ShopListContent from "./ShopListContent";
import ShopListTitle from "./ShopListTitle";

function ShopList() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <ShopListTitle />
            {/* <ShopListContent /> */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ShopList;
