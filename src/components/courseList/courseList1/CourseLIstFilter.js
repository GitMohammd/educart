import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CourseLIstFilter() {
  return (
    <>
      <div className="col-xl-3 col-lg-4 lg:d-none">
        <div className="pr-30 lg:pr-0">
          <div data-anim="slide-up delay-2" className="sidebar -courses">
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5 className="sidebar__title">Category</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">Art</div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">Exercise</div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Software Development
                        </div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">Music</div>
                        <div className="sidebar-checkbox__count">(67)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Material Design
                        </div>
                        <div className="sidebar-checkbox__count">(34)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Photography
                        </div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>
                    </div>

                    <div className="sidebar__more mt-15">
                      <a
                        href="#"
                        className="text-14 fw-500 underline text-purple-1"
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Ratings</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
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
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
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
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
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
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
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
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Instructors</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Jane Cooper
                        </div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Jenny Wilson
                        </div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Robert Fox
                        </div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Jacob Jones
                        </div>
                        <div className="sidebar-checkbox__count">(67)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Albert Flores
                        </div>
                        <div className="sidebar-checkbox__count">(34)</div>
                      </div>
                    </div>
                    <div className="sidebar__more mt-15">
                      <a
                        href="#"
                        className="text-14 fw-500 underline text-purple-1"
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Price</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio-2"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">All</div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio-2"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Free</div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input
                              type="radio"
                              name="radio-2"
                              checked="checked"
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Paid</div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Level</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          All Levels
                        </div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">Beginner</div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">
                          Intermediate
                        </div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>

                        <div className="sidebar-checkbox__title">Expert</div>
                        <div className="sidebar-checkbox__count">(67)</div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Languange</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">English</div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">French</div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">German</div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Italian</div>
                        <div className="sidebar-checkbox__count">(67)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Turkish</div>
                        <div className="sidebar-checkbox__count">(34)</div>
                      </div>
                    </div>
                    <div className="sidebar__more mt-15">
                      <a
                        href="#"
                        className="text-14 fw-500 underline text-purple-1"
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h5 className="sidebar__title">Duration</h5>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">
                          Less than 3 hours
                        </div>
                        <div className="sidebar-checkbox__count">(18)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">
                          4 - 7 hours
                        </div>
                        <div className="sidebar-checkbox__count">(12)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">
                          8 -18 hours{" "}
                        </div>
                        <div className="sidebar-checkbox__count">(23)</div>
                      </div>

                      <div className="sidebar-checkbox__item">
                        <div className="form-checkbox">
                          <input type="checkbox" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">
                          20 + Hours
                        </div>
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

      {/* <div className="col-xl-3 col-lg-4 lg:d-none">
        <div className="pr-30 lg:pr-0">
          <div data-anim="slide-up delay-2" className="sidebar -courses">
            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Category</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">Art</div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Exercise
                          </div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Software Development
                          </div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">Music</div>
                          <div className="sidebar-checkbox__count">(67)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Material Design
                          </div>
                          <div className="sidebar-checkbox__count">(34)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Photography
                          </div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>
                      </div>

                      <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Ratings</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
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
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
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
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
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
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
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
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Instructors</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Jane Cooper
                          </div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Jenny Wilson
                          </div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Robert Fox
                          </div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Jacob Jones
                          </div>
                          <div className="sidebar-checkbox__count">(67)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Albert Flores
                          </div>
                          <div className="sidebar-checkbox__count">(34)</div>
                        </div>
                      </div>
                      <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Price</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio-2"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">All</div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio-2"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">Free</div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-radio mr-10">
                            <div className="radio">
                              <input
                                type="radio"
                                name="radio-2"
                                checked="checked"
                              />
                              <div className="radio__mark">
                                <div className="radio__icon"></div>
                              </div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">Paid</div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Level</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            All Levels
                          </div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Beginner
                          </div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">
                            Intermediate
                          </div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="sidebar-checkbox__title">Expert</div>
                          <div className="sidebar-checkbox__count">(67)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Languange</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">English</div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">French</div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">German</div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">Italian</div>
                          <div className="sidebar-checkbox__count">(67)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">Turkish</div>
                          <div className="sidebar-checkbox__count">(34)</div>
                        </div>
                      </div>
                      <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar__item">
              <div className="accordion js-accordion">
                <div className="accordion__item js-accordion-item-active">
                  <div className="accordion__button items-center">
                    <h5 className="sidebar__title">Duration</h5>

                    <div className="accordion__icon">
                      <div className="icon icon-chevron-down"></div>
                      <div className="icon icon-chevron-up"></div>
                    </div>
                  </div>

                  <div className="accordion__content">
                    <div className="accordion__content__inner">
                      <div className="sidebar-checkbox">
                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">
                            Less than 3 hours
                          </div>
                          <div className="sidebar-checkbox__count">(18)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">
                            4 - 7 hours
                          </div>
                          <div className="sidebar-checkbox__count">(12)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">
                            8 -18 hours{" "}
                          </div>
                          <div className="sidebar-checkbox__count">(23)</div>
                        </div>

                        <div className="sidebar-checkbox__item">
                          <div className="form-checkbox">
                            <input type="checkbox" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">
                            20 + Hours
                          </div>
                          <div className="sidebar-checkbox__count">(67)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CourseLIstFilter;
