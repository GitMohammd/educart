import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AskedQuestion() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">
                Frequently Asked Questions.
              </h2>

              <p className="sectionTitle__text ">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>

            <div className="accordion -block text-left pt-60 lg:pt-40 js-accordion">
              <div className="accordion__item">
                <Accordion defaultExpanded={false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="accordion__button">
                      <span className="text-17 fw-500 text-dark-1">
                        Do you offer discounts for students?
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component={"span"}>
                      <div className="">
                        <div className="accordion__content__inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="accordion__item">
                <Accordion defaultExpanded={false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="accordion__button">
                      <span className="text-17 fw-500 text-dark-1">
                        Do you offer special pricing for big teams?
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component={"span"}>
                      <div className="">
                        <div className="accordion__content__inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="accordion__item">
                <Accordion defaultExpanded={false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="accordion__button">
                      <span className="text-17 fw-500 text-dark-1">
                        What is the past experience of your teachers?
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component={"span"}>
                      <div className="">
                        <div className="accordion__content__inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="accordion__item">
                <Accordion defaultExpanded={false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="accordion__button">
                      <span className="text-17 fw-500 text-dark-1">
                        What is the course refund policy?
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component={"span"}>
                      <div className="">
                        <div className="accordion__content__inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="accordion__item">
                <Accordion defaultExpanded={false}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="accordion__button">
                      <span className="text-17 fw-500 text-dark-1">
                        Do you offer discounts for non-profits?
                      </span>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography component={"span"}>
                      <div className="">
                        <div className="accordion__content__inner">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                          </p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskedQuestion;
