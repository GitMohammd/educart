import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Recommendation() {
  const [value, setValue] = useState("");
  const [diffvalue, setDiffValue] = useState("");
  // const [toggleDiff, setToggleDiff] = useState(false);
  // const handleDiffChange = (event) => {
  //   setDiffValue(event.target.value);
  // };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // const HandleToggleDiff = () => {};

  const handleDiffChange = (event) => {
    setDiffValue(event.target.value);
  };

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
          <div className="col-auto">
            <div className="dropdown js-dropdown js-catb-active">
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  fullWidth
                  className="dropdown__button text-14"
                  style={{ height: "100%" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    // className="-dark-bg-dark-2 -dark-border-white-10"
                    style={{ color: "black" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Design</MenuItem>
                    <MenuItem value={20}>Illustration</MenuItem>
                    <MenuItem value={30}>Lifestyle</MenuItem>
                    <MenuItem value={40}>Business</MenuItem>
                    {/* <div className=" -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-catb-toggle">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <MenuItem value={10}>Ten</MenuItem>
                          <a href="#" className="d-block js-dropdown-link">
                            <MenuItem value={10}>Ten</MenuItem>
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Lifestyle
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link"></a>
                        </div>
                      </div>
                    </div> */}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>

          <div className="col-auto">
            <div className="dropdown js-dropdown js-catb-active">
              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  fullWidth
                  className="dropdown__button text-14"
                  style={{ height: "100%" }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Difficulty
                  </InputLabel>
                  <Select
                    // className="-dark-bg-dark-2 -dark-border-white-10"
                    style={{ color: "black" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={diffvalue}
                    label="Difficulty"
                    onChange={handleDiffChange}
                  >
                    <MenuItem value={10}>Easy</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>Hard</MenuItem>
                    {/* <div className=" -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-catb-toggle">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <MenuItem value={10}>Ten</MenuItem>
                          <a href="#" className="d-block js-dropdown-link">
                            <MenuItem value={10}>Ten</MenuItem>
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Illustration
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Lifestyle
                          </a>
                        </div>
                        <div>
                          <a href="#" className="d-block js-dropdown-link"></a>
                        </div>
                      </div>
                    </div> */}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="dropdown js-dropdown js-diff-active">
              <div
                className="dropdown__button d-flex items-center text-14 border-light h-60"
                // data-el-toggle=".js-diff-toggle"
                // data-el-toggle-active=".js-diff-active"
                onClick={() => setToggleDiff(!toggleDiff)}
              >
                <span className="js-dropdown-title">Difficulty</span>
                <i className="icon text-9 ml-40 icon-chevron-down"></i>
              </div>

              <div
                className={
                  toggleDiff
                    ? "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 -is-el-visible"
                    : "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 "
                }
              >
                <div className="text-14 y-gap-15 js-dropdown-list">
                  <div>
                    <a href="#" className="d-block js-dropdown-link">
                      Easy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-block js-dropdown-link">
                      Medium
                    </a>
                  </div>
                  <div>
                    <a href="#" className="d-block js-dropdown-link">
                      Hard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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
