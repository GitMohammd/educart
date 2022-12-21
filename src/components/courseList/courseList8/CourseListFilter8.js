import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function CourseListFilter8(props) {
  const {
    courses,
    filteredCourses,
    populerCourse,
    setPopulerCourse,
    // handleCourseChange,
    handleCatagoryChange,
    handleRatingChange,
    handleinstructorChange,
    handlePriceChange,
    handleLevelChange,
    handLanguageChange,
    handDurationChange,
    handlePopulerCourseChange,
  } = props;
  return (
    <div className="row x-gap-60 y-gap-40">
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h5 className="sidebar__title">Category</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleCatagoryChange}
                        value={"art"}
                        lable={"art"}
                      />
                      Art
                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleCatagoryChange}
                        value={"exercise"}
                      />
                      Exercise
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleCatagoryChange}
                        value={"softwareDevelopment"}
                      />
                      Software Development
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <div className="sidebar-checkbox__item">
                        <Checkbox
                          color="default"
                          onChange={handleCatagoryChange}
                          value={"music"}
                        />
                        Music
                        <div className="sidebar-checkbox__count">(67)</div>
                      </div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <div className="sidebar-checkbox__item">
                        <Checkbox
                          color="default"
                          onChange={handleCatagoryChange}
                          value={"materialDesign"}
                        />
                        Material Design
                        <div className="sidebar-checkbox__count">(34)</div>
                      </div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <div className="sidebar-checkbox__item">
                        <Checkbox
                          color="default"
                          onChange={handleCatagoryChange}
                          value={"photography"}
                        />
                        Photography
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div> */}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Ratings</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handleRatingChange}
                        value={4}
                      />
                      <div className="sidebar-checkbox__title d-flex items-center">
                        <div className="d-flex x-gap-5 pr-10">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                        </div>
                        4.5 &amp; up
                      </div>
                      <div className="sidebar-checkbox__count">(1991)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handleRatingChange}
                        value={4}
                      />
                      <div className="sidebar-checkbox__title d-flex items-center">
                        <div className="d-flex x-gap-5 pr-10">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                        </div>
                        4.0 &amp; up
                      </div>
                      <div className="sidebar-checkbox__count">(200)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handleRatingChange}
                        value={3}
                      />
                      <div className="sidebar-checkbox__title d-flex items-center">
                        <div className="d-flex x-gap-5 pr-10">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                        </div>
                        3.5 &amp; up
                      </div>
                      <div className="sidebar-checkbox__count">(300)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handleRatingChange}
                        value={3}
                      />
                      <div className="sidebar-checkbox__title d-flex items-center">
                        <div className="d-flex x-gap-5 pr-10">
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                          <div className="icon-star text-11 text-yellow-1"></div>
                        </div>
                        3.0 &amp; up
                      </div>
                      <div className="sidebar-checkbox__count">(500)</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Instructors</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleinstructorChange}
                        value={"janeCooper"}
                      />
                      <div className="sidebar-checkbox__title">Jane Cooper</div>

                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleinstructorChange}
                        value={"jennyWilson"}
                      />

                      <div className="sidebar-checkbox__title">
                        Jenny Wilson
                      </div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleinstructorChange}
                        value={"robertFox"}
                      />

                      <div className="sidebar-checkbox__title">Robert Fox</div>
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleinstructorChange}
                        value={"jacobJones"}
                      />

                      <div className="sidebar-checkbox__title">Jacob Jones</div>
                      <div className="sidebar-checkbox__count">(67)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleinstructorChange}
                        value={"albertFlores"}
                      />

                      <div className="sidebar-checkbox__title">
                        Albert Flores
                      </div>
                      <div className="sidebar-checkbox__count">(34)</div>
                    </div>
                  </div>
                  {/* <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div> */}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Price</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handlePriceChange}
                        value={"all"}
                      />
                      <div className="sidebar-checkbox__title">All</div>
                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handlePriceChange}
                        value={"free"}
                      />
                      <div className="sidebar-checkbox__title">Free</div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        icon={<CheckCircleOutlineIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        onChange={handlePriceChange}
                        value={"paid"}
                      />
                      <div className="sidebar-checkbox__title">Paid</div>
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Level</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleLevelChange}
                        value={"allLevels"}
                      />

                      <div className="sidebar-checkbox__title">All Levels</div>
                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleLevelChange}
                        value={"beginner"}
                      />

                      <div className="sidebar-checkbox__title">Beginner</div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleLevelChange}
                        value={"intermediate"}
                      />

                      <div className="sidebar-checkbox__title">
                        Intermediate
                      </div>
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handleLevelChange}
                        value={"expert"}
                      />

                      <div className="sidebar-checkbox__title">Expert</div>
                      <div className="sidebar-checkbox__count">(67)</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Languange</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handLanguageChange}
                        value={"english"}
                      />
                      <div className="sidebar-checkbox__title">English</div>
                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handLanguageChange}
                        value={"french"}
                      />
                      <div className="sidebar-checkbox__title">French</div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handLanguageChange}
                        value={"german"}
                      />
                      <div className="sidebar-checkbox__title">German</div>
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handLanguageChange}
                        value={"italian"}
                      />
                      <div className="sidebar-checkbox__title">Italian</div>
                      <div className="sidebar-checkbox__count">(67)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handLanguageChange}
                        value={"turkish"}
                      />
                      <div className="sidebar-checkbox__title">Turkish</div>
                      <div className="sidebar-checkbox__count">(34)</div>
                    </div>
                  </div>
                  {/* <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div> */}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="sidebar__item">
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h5 className="sidebar__title">Duration</h5>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"span"}>
                <div className="accordion__content__inner">
                  <div className="">
                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handDurationChange}
                        value={3}
                      />
                      <div className="sidebar-checkbox__title">
                        Less than 3 hours
                      </div>
                      <div className="sidebar-checkbox__count">(18)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handDurationChange}
                        value={"4"}
                      />
                      <div className="sidebar-checkbox__title">4 - 7 hours</div>
                      <div className="sidebar-checkbox__count">(12)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handDurationChange}
                        value={"8"}
                      />
                      <div className="sidebar-checkbox__title">
                        8 -18 hours{" "}
                      </div>
                      <div className="sidebar-checkbox__count">(23)</div>
                    </div>

                    <div className="sidebar-checkbox__item">
                      <Checkbox
                        color="default"
                        onChange={handDurationChange}
                        value={"20"}
                      />
                      <div className="sidebar-checkbox__title">20 + Hours</div>
                      <div className="sidebar-checkbox__count">(67)</div>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default CourseListFilter8;
