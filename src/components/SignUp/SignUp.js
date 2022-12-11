import React, { useEffect } from "react";
import LoginNavigation from "../LoginPage/LoginNavigation";
import SignUpContent from "./SignUpContent";

function SignUp() {
  useEffect(() => {
    document.documentElement.classList.remove("-dark-mode");
  }, []);
  return (
    <div className="preloader-visible" data-barba="wrapper">
      <div className="barba-container" data-barba="container">
        <main className="main-content  ">
          <LoginNavigation />
          <div className="content-wrapper  js-content-wrapper">
            <SignUpContent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
