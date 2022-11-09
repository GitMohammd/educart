import React from "react";
import Navigation from "../shared/Navigation";
import LoginContent from "./LoginContent";
import LoginNavigation from "./LoginNavigation";

function Login() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <LoginNavigation />
          <div className="content-wrapper  js-content-wrapper">
            <LoginContent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
