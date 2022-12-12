import React, { useEffect } from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import BlogListHeader from "../blogList1/BlogListHeader";
import BlogList3Content from "../blogList3/BlogList3Content";

function BlogList3() {
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
            <BlogListHeader />
            <BlogList3Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlogList3;
