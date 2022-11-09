import React from "react";
import Footer from "../../shared/Footer";
import Navigation from "../../shared/Navigation";
import SubNav from "../../shared/SubNav";
import SingleBlogContent from "./SingleBlogContent";
import SingleBlogHeader from "./SingleBlogHeader";
import SingleBlogRelatedPost from "./SingleBlogRelatedPost";

function SingleBlog() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <Navigation />
          <div className="content-wrapper  js-content-wrapper">
            <SubNav />
            <SingleBlogHeader />
            <SingleBlogContent />
            <SingleBlogRelatedPost />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default SingleBlog;
