import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function LessonPageAsideV2() {
  const [isContentOpen, setContentOpen] = useState(false);

  const [isBrifeOpen, setBrifeOpen] = useState(false);

  const [isTypeOpen, setTypeOpen] = useState(false);
  const [isPhotoOpen, setPhotoOpen] = useState(false);
  const [isWireOpen, setWireOpen] = useState(false);
  return (
    <aside className="lesson-sidebar -type-2 lg:order-1">
      <div className="px-30 sm:px-20">
        <form className="lesson-sidebar-search" action="post">
          <input type="text" placeholder="Search" />
          <button className="" type="submit">
            <div className="icon-search text-20"></div>
          </button>
        </form>

        <div className="accordion -block-2 text-left js-accordion mt-30">
          <div
            onClick={() => setContentOpen(!isContentOpen)}
            className={
              isContentOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
            <div className="accordion__button py-20 px-30 bg-light-4">
              <div className="d-flex items-center">
                {isContentOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}

                <span
                  style={{ marginLeft: "15px" }}
                  className="text-17 fw-500 text-dark-1"
                >
                  Course Content
                </span>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{ maxHeight: isContentOpen ? "503px" : "" }}
            >
              <div className="accordion__content__inner px-30 py-30">
                <div className="y-gap-30">
                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Introduction to the User</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Getting started with your</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>
                          What is UI vs UX - User Interface vs User Experience
                          vs Product
                        </div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Wireframing (low fidelity) in</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Viewing your prototype on</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Sharing your design</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setBrifeOpen(!isBrifeOpen)}
            className={
              isBrifeOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
            <div className="accordion__button py-20 px-30 bg-light-4">
              <div className="d-flex items-center">
                {isBrifeOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}

                <span
                  style={{ marginLeft: "15px" }}
                  className="text-17 fw-500 text-dark-1"
                >
                  The Brief
                </span>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{ maxHeight: isBrifeOpen ? "503px" : "" }}
            >
              <div className="accordion__content__inner px-30 py-30">
                <div className="y-gap-30">
                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Introduction to the User</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Getting started with your</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>
                          What is UI vs UX - User Interface vs User Experience
                          vs Product
                        </div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Wireframing (low fidelity) in</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Viewing your prototype on</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Sharing your design</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setTypeOpen(!isTypeOpen)}
            className={
              isTypeOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
            <div className="accordion__button py-20 px-30 bg-light-4">
              <div className="d-flex items-center">
                {isTypeOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}

                <span
                  style={{ marginLeft: "15px" }}
                  className="text-17 fw-500 text-dark-1"
                >
                  Type, Color &amp; Icon Introduction
                </span>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{ maxHeight: isTypeOpen ? "503px" : "" }}
            >
              <div className="accordion__content__inner px-30 py-30">
                <div className="y-gap-30">
                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Introduction to the User</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Getting started with your</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>
                          What is UI vs UX - User Interface vs User Experience
                          vs Product
                        </div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Wireframing (low fidelity) in</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Viewing your prototype on</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Sharing your design</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setPhotoOpen(!isPhotoOpen)}
            className={
              isPhotoOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
            <div className="accordion__button py-20 px-30 bg-light-4">
              <div className="d-flex items-center">
                {isPhotoOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}

                <span
                  style={{ marginLeft: "15px" }}
                  className="text-17 fw-500 text-dark-1"
                >
                  Prototyping a App - Introduction
                </span>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{ maxHeight: isPhotoOpen ? "503px" : "" }}
            >
              <div className="accordion__content__inner px-30 py-30">
                <div className="y-gap-30">
                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Introduction to the User</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Getting started with your</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>
                          What is UI vs UX - User Interface vs User Experience
                          vs Product
                        </div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Wireframing (low fidelity) in</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Viewing your prototype on</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Sharing your design</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setWireOpen(!isWireOpen)}
            className={
              isWireOpen ? "accordion__item is-active" : "accordion__item"
            }
          >
            <div className="accordion__button py-20 px-30 bg-light-4">
              <div className="d-flex items-center">
                {isWireOpen ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}

                <span
                  style={{ marginLeft: "15px" }}
                  className="text-17 fw-500 text-dark-1"
                >
                  Wireframe Feedback
                </span>
              </div>
            </div>

            <div
              className="accordion__content"
              style={{ maxHeight: isWireOpen ? "503px" : "" }}
            >
              <div className="accordion__content__inner px-30 py-30">
                <div className="y-gap-30">
                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Introduction to the User</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Getting started with your</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>
                          What is UI vs UX - User Interface vs User Experience
                          vs Product
                        </div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Wireframing (low fidelity) in</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Viewing your prototype on</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="d-flex">
                      <div className="d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10">
                        <div className="icon-play text-9"></div>
                      </div>

                      <div className="">
                        <div>Sharing your design</div>
                        <div className="d-flex x-gap-20 items-center pt-5">
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            Preview
                          </a>
                          <a
                            href="#"
                            className="text-14 lh-1 text-purple-1 underline"
                          >
                            03:56
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LessonPageAsideV2;
