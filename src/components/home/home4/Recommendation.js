import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Recommendation() {
  const catRef = useRef();
  const difRef = useRef();

  const [cataValue, setCataValue] = useState("");
  const [diffvalue, setDiffValue] = useState("");

  useEffect(() => {
    const closeCat = (e) => {
      if (!catRef.current.contains(e.target)) {
        setIscatOpen(false);
      }
    };
    document.body.addEventListener("click", closeCat);
    return () => {
      document.body.removeEventListener("click", closeCat);
    };
  }, []);
  useEffect(() => {
    const closeDiff = (e) => {
      if (!difRef.current.contains(e.target)) {
        setIsDifOpen(false);
      }
    };
    document.body.addEventListener("click", closeDiff);
    return () => {
      document.body.removeEventListener("click", closeDiff);
    };
  }, []);
  const [isCatOpen, setIscatOpen] = useState(false);
  const [isDifOpen, setIsDifOpen] = useState(false);

  return (
    <section className="layout-pt-lg layout-pb-lg border-top-light">
      <div data-anim-wrap className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Get personal learning recommendations
              </h2>

              <p className="sectionTitle__text ">
                Enhance your skills with best Online courses
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-20 justify-center pt-30">
          <div ref={catRef} className="col-auto">
            <div
              onClick={() => setIscatOpen((prev) => !prev)}
              className="dropdown js-dropdown js-catb-active"
            >
              <div
                style={{
                  width: "143px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="dropdown__button d-flex items-center text-14 border-light h-60"
                data-el-toggle=".js-catb-toggle"
                data-el-toggle-active=".js-catb-active"
              >
                <span className="js-dropdown-title">
                  {" "}
                  {cataValue === ""
                    ? "Category"
                    : cataValue.charAt(0).toUpperCase() + cataValue.slice(1)}
                </span>
                <span>
                  {" "}
                  {isCatOpen ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}{" "}
                </span>
              </div>

              <div
                className={
                  isCatOpen
                    ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle -is-el-visible"
                    : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle "
                }
              >
                <div class="text-14 y-gap-15 js-dropdown-list">
                  <div onClick={() => setCataValue("animation")}>
                    <button class="d-block js-dropdown-link">Animation</button>
                  </div>

                  <div onClick={() => setCataValue("design")}>
                    <button class="d-block js-dropdown-link">Design</button>
                  </div>

                  <div onClick={() => setCataValue("illustration")}>
                    <button class="d-block js-dropdown-link">
                      Illustration
                    </button>
                  </div>

                  <div onClick={() => setCataValue("lifestyle")}>
                    <button class="d-block js-dropdown-link">Lifestyle</button>
                  </div>

                  <div onClick={() => setCataValue("business")}>
                    <button class="d-block js-dropdown-link">Business</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={difRef} className="col-auto">
            <div
              onClick={() => setIsDifOpen((prev) => !prev)}
              className="dropdown js-dropdown js-diff-active"
            >
              <div
                style={{
                  width: "143px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="dropdown__button d-flex items-center text-14 border-light h-60"
                data-el-toggle=".js-diff-toggle"
                data-el-toggle-active=".js-diff-active"
              >
                <span className="js-dropdown-title">
                  {" "}
                  {diffvalue === ""
                    ? "Diffiulty"
                    : diffvalue.charAt(0).toUpperCase() + diffvalue.slice(1)}
                </span>
                <span>
                  {" "}
                  {isDifOpen ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}{" "}
                </span>
              </div>

              <div
                className={
                  isDifOpen
                    ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle -is-el-visible"
                    : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle "
                }
              >
                <div class="text-14 y-gap-15 js-dropdown-list">
                  <div onClick={() => setDiffValue("hard")}>
                    <button class="d-block js-dropdown-link">Hard</button>
                  </div>

                  <div onClick={() => setDiffValue("meduium")}>
                    <button class="d-block js-dropdown-link">Meduium</button>
                  </div>

                  <div onClick={() => setDiffValue("easy")}>
                    <button class="d-block js-dropdown-link">Easy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <a href="#" className="button -md -purple-1 text-white">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendation;
