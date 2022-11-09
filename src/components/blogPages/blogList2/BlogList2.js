import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import BlogListHeader from "../blogList1/BlogListHeader";
import BlogListContent2 from "./BlogListContent2";

function BlogList2() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <BlogListHeader />
            <BlogListContent2 />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlogList2;
