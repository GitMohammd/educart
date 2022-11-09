import React from "react";

function UiElementMain() {
  return (
    <section className="layout-pb-lg">
      <div className="container">
        <div className="row y-gap-50">
          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Accordions
            </div>
            <div className="accordion -block js-accordion">
              <div className="accordion__item bg-light-4">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer discounts for students?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item bg-light-4">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer special pricing for big teams?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item bg-light-4">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    What is the past experience of your teachers?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item bg-light-4">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    What is the course refund policy?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion__item bg-light-4">
                <div className="accordion__button">
                  <div className="accordion__icon">
                    <div className="icon" data-feather="plus"></div>
                    <div className="icon" data-feather="minus"></div>
                  </div>
                  <span className="text-17 fw-500 text-dark-1">
                    Do you offer discounts for non-profits?
                  </span>
                </div>

                <div className="accordion__content">
                  <div className="accordion__content__inner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Tabs</div>
            <div className="tabs -pills js-tabs">
              <div className="tabs__controls d-flex x-gap-10 js-tabs-controls">
                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button is-active"
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    All Categories
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Animation
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    Design
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-20 py-8 rounded-8 text-light-1 js-tabs-button "
                    data-tab-target=".-tab-item-4"
                    type="button"
                  >
                    Illustration
                  </button>
                </div>
              </div>

              <div className="tabs__content mt-20 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>

                <div className="tabs__pane -tab-item-2 ">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>

                <div className="tabs__pane -tab-item-3 ">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>

                <div className="tabs__pane -tab-item-4 ">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>
              </div>
            </div>

            <div className="tabs -active-purple-2 mt-30 js-tabs">
              <div className="tabs__controls d-flex items-center js-tabs-controls">
                <div>
                  <button
                    className="text-light-1 lh-12 tabs__button mr-30 js-tabs-button is-active"
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    items 1
                  </button>
                </div>

                <div>
                  <button
                    className="text-light-1 lh-12 tabs__button mr-30 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    items 2
                  </button>
                </div>

                <div>
                  <button
                    className="text-light-1 lh-12 tabs__button mr-30 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    items 3
                  </button>
                </div>
              </div>

              <div className="tabs__content mt-20 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>

                <div className="tabs__pane -tab-item-2 ">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>

                <div className="tabs__pane -tab-item-3 ">
                  <p>
                    Pharetra nulla ullamcorper sit lectus. Fermentum mauris
                    pellentesque nec nibh sed et, vel diam, massa. Placerat quis
                    vel fames interdum urna lobortis sagittis sed pretium. Morbi
                    sed arcu proin quis tortor non risus.
                  </p>
                  <p className="mt-20">
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">Table</div>
            <table className="table w-1/1">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Hour</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Design UX and UI</td>
                  <td>14</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>Design UX and UI</td>
                  <td>14</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>Design UX and UI</td>
                  <td>14</td>
                  <td>3</td>
                </tr>

                <tr>
                  <td>Design UX and UI</td>
                  <td>14</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Message Boxes
            </div>

            <div className="row y-gap-20">
              <div className="col-12">
                <div className="d-flex items-center justify-between bg-info-1 pl-30 pr-20 py-30 rounded-8">
                  <div className="text-info-2 lh-1 fw-500">
                    Info: User pending action
                  </div>
                  <div className="text-info-2 size-20" data-feather="x"></div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex items-center justify-between bg-warning-1 pl-30 pr-20 py-30 rounded-8">
                  <div className="text-warning-2 lh-1 fw-500">
                    Info: User pending action
                  </div>
                  <div
                    className="text-warning-2 size-20"
                    data-feather="x"
                  ></div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex items-center justify-between bg-error-1 pl-30 pr-20 py-30 rounded-8">
                  <div className="text-error-2 lh-1 fw-500">
                    Info: User pending action
                  </div>
                  <div className="text-error-2 size-20" data-feather="x"></div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex items-center justify-between bg-success-1 pl-30 pr-20 py-30 rounded-8">
                  <div className="text-success-2 lh-1 fw-500">
                    Info: User pending action
                  </div>
                  <div
                    className="text-success-2 size-20"
                    data-feather="x"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 pt-50">
          <div className="col-12">
            <div className="text-18 lh-1 text-dark-1 fw-500">Buttons</div>
          </div>

          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10">
              <div className="col-auto">
                <button className="button -md -purple-1 text-white">
                  Button 1
                </button>
              </div>
              <div className="col-auto">
                <button className="button -md -outline-purple-1 text-purple-1">
                  Button 1 Hover
                </button>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10">
              <div className="col-auto">
                <button className="button -md -green-1 text-dark-1">
                  Button 2
                </button>
              </div>
              <div className="col-auto">
                <button className="button -md -outline-green-1 text-green-1">
                  Button 2 Hover
                </button>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10">
              <div className="col-auto">
                <button className="button -md -dark-1 text-white">
                  Button 3
                </button>
              </div>
              <div className="col-auto">
                <button className="button -md -outline-dark-1 text-dark-1">
                  Button 3 Hover
                </button>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10">
              <div className="col-auto">
                <button className="button -md -purple-3 text-purple-1">
                  Button 4
                </button>
              </div>
              <div className="col-auto">
                <button className="button -md -purple-1 text-white">
                  Button 4 Hover
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap pt-30">
          <div className="col-auto">
            <a href="#" className="button -icon -purple-3 text-purple-1">
              View All İnstructors
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="button -icon -purple-1 text-white">
              View All İnstructors
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
          <div className="col-auto">
            <a
              href="#"
              className="button -icon -outline-purple-1 text-purple-1"
            >
              View All İnstructors
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="#" className="button -icon -purple-1 text-white">
              View All İnstructors
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </a>
          </div>
        </div>

        <div className="row x-gap-60 y-gap-30 mt-50">
          <div className="col-12">
            <div className="text-18 lh-1 text-dark-1 fw-500">Form</div>
          </div>

          <div className="col-lg-6">
            <form action="post" className="contact-form">
              <div className="col-12">
                <label
                  className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  for="name"
                >
                  Input
                </label>

                <input type="text" name="name" placeholder="Placeholder..." />
              </div>

              <label className="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-40">
                Search Select boxes, Hover
              </label>
              <div className="form-select">
                <select className="selectize wide js-selectize-seachable">
                  <option data-display="Banking">Banking</option>
                  <option value="Digital & Creative">Digital & Creative</option>
                  <option value="Retail">Retail</option>
                  <option value="Designer">Designer</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Select boxes
            </label>
            <div className="form-select">
              <select className="selectize wide js-selectize">
                <option data-display="Select">Country</option>
                <option value="Greece">Turkey</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
            </div>

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-40">
              Multiple Select Boxes, Hover
            </label>
            <select className="selectize wide js-selectize" multiple="multiple">
              <option value="1">Banking</option>
              <option value="2">Digital & Creative</option>
              <option value="3">Retail</option>
              <option value="4">Designer</option>
              <option value="5">Developer</option>
            </select>
          </div>

          <div className="col-lg-6">
            <form action="post" className="contact-form">
              <div className="col-12">
                <label
                  className="text-16 lh-1 fw-500 text-dark-1 mb-10"
                  for="name"
                >
                  Textarea
                </label>

                <textarea
                  name="name"
                  placeholder="Description..."
                  rows="7"
                ></textarea>
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Radiobox
                </div>
                <div className="row y-gap-15">
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="lh-1 text-14 text-dark-1 ml-12">
                        items
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="lh-1 text-14 text-dark-1 ml-12">
                        items
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="lh-1 text-14 text-dark-1 ml-12">
                        items
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="lh-1 text-14 text-dark-1 ml-12">
                        items
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Checkbox
                </div>

                <div className="d-flex items-center">
                  <div className="form-checkbox">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check"></div>
                    </div>
                  </div>
                  <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
                </div>

                <div className="d-flex items-center mt-15">
                  <div className="form-checkbox">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check"></div>
                    </div>
                  </div>
                  <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
                </div>

                <div className="d-flex items-center mt-15">
                  <div className="form-checkbox">
                    <input type="checkbox" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon icon-check"></div>
                    </div>
                  </div>
                  <div className="text-14 lh-12 text-dark-1 ml-15">Items</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Switch
                </div>
                <div className="form-switch d-flex items-center">
                  <div className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                  <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
                </div>

                <div className="form-switch d-flex items-center mt-20">
                  <div className="switch">
                    <input type="checkbox" checked />
                    <span className="switch__slider"></span>
                  </div>
                  <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between mt-50">
          <div className="col-lg-3">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Tooltips
            </div>
            <div className="d-flex mt-24">
              <div className="tooltip -top px-35 py-15 bg-light-3 rounded-8">
                Top
                <div className="tooltip__content">Top</div>
              </div>
              <div className="tooltip -bottom px-35 py-15 bg-light-3 rounded-8 ml-12">
                Bottom
                <div className="tooltip__content">Bottom</div>
              </div>
              <div className="tooltip -left px-35 py-15 bg-light-3 rounded-8 ml-12">
                Left
                <div className="tooltip__content">Left</div>
              </div>
              <div className="tooltip -right px-35 py-15 bg-light-3 rounded-8 ml-12">
                Right
                <div className="tooltip__content">Right</div>
              </div>
            </div>

            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30 mt-60">
              Range Slider
            </div>
            <div className="" slider id="slider-distance">
              <div>
                <div inverse-left style="width:70%;"></div>
                <div inverse-right style="width:70%;"></div>
                <div range style="left:30%; right:40%;"></div>

                <span thumb style="left:30%;"></span>
                <span thumb style="left:60%;"></span>

                <div className="d-flex justify-center">
                  <div className="mt-20">
                    <div className="d-flex items-center px-20 py-8 rounded-8 bg-purple-3 text-14 lh-12 fw-500 text-purple-1">
                      $<div className="js-first">30</div>
                      <div>-</div>$<div className="js-second">60</div>
                    </div>
                  </div>
                </div>
              </div>

              <input
                type="range"
                tabindex="0"
                value="30"
                max="100"
                min="0"
                step="1"
                oninput="
              this.value=Math.min(this.value,this.parentNode.childNodes[3].value-1);
              var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
              var children = this.parentNode.childNodes[1].childNodes;
              children[1].style.width=value+'%';
              children[5].style.left=value+'%';
              children[7].style.left=value+'%';
              this.parentNode.childNodes[1].querySelector('.js-first').innerHTML=this.value;
            "
              />

              <input
                type="range"
                tabindex="0"
                value="60"
                max="100"
                min="0"
                step="1"
                oninput="
              this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
              var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
              var children = this.parentNode.childNodes[1].childNodes;
              children[3].style.width=(100-value)+'%';
              children[5].style.right=(100-value)+'%';
              children[9].style.left=value+'%';children[13].style.left=value+'%';
              this.parentNode.childNodes[1].querySelector('.js-second').innerHTML=this.value;
            "
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Progress bars
            </div>
            <div className="progress-bar">
              <div className="progress-bar__bg bg-light-3"></div>
              <div className="progress-bar__bar bg-purple-1 col-10">
                <span>90%</span>
              </div>
            </div>
            <div className="progress-bar mt-50">
              <div className="progress-bar__bg bg-light-3"></div>
              <div className="progress-bar__bar bg-purple-1 col-6">
                <span>50%</span>
              </div>
            </div>
            <div className="progress-bar mt-50">
              <div className="progress-bar__bg bg-light-3"></div>
              <div className="progress-bar__bar bg-purple-1 col-5">
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-12">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Typography
            </div>

            <div className="text-18 lh-1 text-dark-1 fw-500 mb-10">
              Course Description
            </div>
            <p>
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
              Nullam tempus sollicitudin cursus. Ut et adipiscing erat.
              Curabitur this is a text link libero tempus congue.
            </p>
            <p className="mt-20">
              Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
              sagittis dolor sed mi elementum pretium. Donec et justo ante.
              Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Integer tristique elit lobortis purus bibendum,
              quis dictum metus mattis. Phasellus posuere felis sed eros
              porttitor mattis. Curabitur massa magna, tempor in blandit id,
              porta in ligula. Aliquam laoreet nisl massa, at interdum mauris
              sollicitudin et.
            </p>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-lg-9">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              What you'll learn
            </div>
            <div className="row x-gap-100 justfiy-between">
              <div className="col-md-6">
                <div className="y-gap-20">
                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Become a UX designer.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>You will be able to add UX designer to your CV</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Become a UI designer.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Build &amp; test a full website design.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Create your first UX brief &amp; persona.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>How to use premade UI kits.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="y-gap-20">
                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Create quick wireframes.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Downloadable exercise files</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Build a UX project from beginning to end.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>Learn to design websites &amp; mobile phone apps.</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>All the techniques used by UX professionals</p>
                  </div>

                  <div className="d-flex items-center">
                    <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                      <i className="icon-check text-6"></i>
                    </div>
                    <p>
                      You will be able to talk correctly with other UX design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-60 lg:pt-40">
          <div className="col-12">
            <div className="text-18 lh-1 text-dark-1 fw-500 mb-30">
              Requirements
            </div>
            <ul className="ul-list y-gap-15">
              <li>
                You will need a copy of Adobe XD 2019 or above. A free trial can
                be downloaded from Adobe.
              </li>
              <li>No previous design experience is needed.</li>
              <li>No previous Adobe XD skills are needed.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UiElementMain;
