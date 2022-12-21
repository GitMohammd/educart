import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ShopListContent() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row x-gap-60">
          <div className="col-lg-3">
            <div data-anim="slide-up delay-3" className="sidebar -shop">
              <div className="sidebar__item">
                <div className="sidebar__search mb-30">
                  <div className="search">
                    <form action="post">
                      <button className="submit" type="submit">
                        <i className="icon" data-feather="search"></i>
                      </button>{" "}
                      <a href="#">Clothing</a>,
                      <input
                        className="field"
                        type="text"
                        placeholder="Search"
                      />
                    </form>
                  </div>
                </div>

                <h5 className="sidebar__title">Categories</h5>

                <div className="sidebar-content -list">
                  <a className="text-dark-1" href="#">
                    College
                  </a>

                  <a className="text-dark-1" href="#">
                    Gym
                  </a>

                  <a className="text-dark-1" href="#">
                    High School
                  </a>

                  <a className="text-dark-1" href="#">
                    Primary
                  </a>

                  <a className="text-dark-1" href="#">
                    School
                  </a>

                  <a className="text-dark-1" href="#">
                    University
                  </a>
                </div>
              </div>

              <div className="sidebar__item">
                <h5 className="sidebar__title">Filter by price</h5>

                <div className="sidebar-content -slider">
                  <div id="slider-distance">
                    <div>
                      <div style={{ width: "70%" }}></div>
                      <div style={{ width: "70%" }}></div>
                      <div style={{ left: "30%", right: "40%" }}></div>

                      <span style={{ left: "30%" }}></span>
                      <span style={{ left: "60%" }}></span>

                      <div className="px-0" style={{ left: "30%" }}>
                        <span id="value">30</span>
                      </div>
                      <div className="px-0" style={{ left: "60%" }}>
                        <span id="value">60</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      tabIndex="0"
                      value="30"
                      max="100"
                      min="0"
                      step="1"
                      onInput="
            this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
            var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
            var children = this.parentNode.childNodes[1].childNodes;
            children[1].style.width=value+'%';
            children[5].style.left=value+'%';
            children[7].style.left=value+'%';children[11].style.left=value+'%';
            children[11].childNodes[1].innerHTML=this.value;
          "
                    />

                    <input
                      type="range"
                      tabIndex="0"
                      value="60"
                      max="100"
                      min="0"
                      step="1"
                      onInput="
            this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
            var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
            var children = this.parentNode.childNodes[1].childNodes;
            children[3].style.width=(100-value)+'%';
            children[5].style.right=(100-value)+'%';
            children[9].style.left=value+'%';children[13].style.left=value+'%';
            children[13].childNodes[1].innerHTML=this.value;
          "
                    />
                  </div>
                </div>
              </div>

              <div className="sidebar__item">
                <h5 className="sidebar__title">Tags</h5>

                <div className="sidebar-content -tags">
                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      Courses
                    </a>
                  </div>

                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      Learn
                    </a>
                  </div>

                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      Online
                    </a>
                  </div>

                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      Education
                    </a>
                  </div>

                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      LMS
                    </a>
                  </div>

                  <div className="sidebar-tag">
                    <a className="text-11 fw-500 text-dark-1" href="#">
                      Training
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row y-gap-10 justify-between items-center">
              <div className="col-auto">
                <div className="text-14">
                  Showing <span className="fw-500 text-dark-1">250</span> total
                  results
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <div className="fw-500 text-dark-1 mr-20">Sort by:</div>

                  <div className="dropdown js-shop-dropdown">
                    <div className="d-flex items-center text-14">
                      <span className="js-dropdown-title">Default Sorting</span>
                      <i
                        className="icon size-20 ml-40"
                        data-feather="chevron-down"
                      ></i>
                    </div>

                    <div className="dropdown__item">
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a
                            className="d-block decoration-none js-dropdown-link"
                            href="#"
                          >
                            Default Sorting
                          </a>
                        </div>
                        <div>
                          <a
                            className="d-block decoration-none js-dropdown-link"
                            href="#"
                          >
                            Clothing
                          </a>
                        </div>
                        <div>
                          <a
                            className="d-block decoration-none js-dropdown-link"
                            href="#"
                          >
                            Glasses
                          </a>
                        </div>
                        <div>
                          <a
                            className="d-block decoration-none js-dropdown-link"
                            href="#"
                          >
                            T-Shirts
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-30">
              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/1.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/2.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/3.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/4.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/5.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/6.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/7.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/8.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="productCard -type-1 text-center">
                  <div className="productCard__image">
                    <img
                      src="assets/img/shop/products/9.png"
                      alt="Product image"
                    />

                    <div className="productCard__controls">
                      <a href="#" className="productCard__icon">
                        <VisibilityIcon />
                      </a>
                      <a href="#" className="productCard__icon">
                        <FavoriteBorderIcon />
                      </a>
                    </div>
                  </div>

                  <div className="productCard__content mt-20">
                    <div className="text-14 lh-1">
                      <a href="#">Clothing</a>,<a href="#">Glasses</a>,
                      <a href="#">T-Shirts</a>
                    </div>
                    <h4 className="text-17 fw-500 mt-15">Wall Clock Brown</h4>
                    <div className="text-17 fw-500 text-purple-1 mt-15">
                      $55.00
                    </div>

                    <div className="productCard__button d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-purple-1 text-dark-1 mt-15"
                      >
                        Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-60 lg:pt-40">
              <div className="col-auto">
                <div className="pagination -buttons">
                  <button className="pagination__button -prev">
                    <div className="icon icon-chevron-left"></div>
                  </button>

                  <div className="pagination__count">
                    <a href="#">1</a>
                    <a className="-count-is-active" href="#">
                      2
                    </a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">67</a>
                  </div>

                  <button className="pagination__button -next">
                    <div className="icon icon-chevron-right"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopListContent;
