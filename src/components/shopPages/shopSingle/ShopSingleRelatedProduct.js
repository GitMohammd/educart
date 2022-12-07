import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UseCourseContext from "../../context/cartContext/UseCourseContext";
import RelatedProduct from "./RelatedProduct";

function ShopSingleRelatedProduct() {
  const { courseItems, removeCourseQuantity } = UseCourseContext();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courseItems]);
  const RelatedProducts = courses.slice(50, 54);
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Related Products</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row y-gap-32 pt-60 sm:pt-40">
          {RelatedProducts.map((product) => (
            <RelatedProduct key={product.id} product={product} />
          ))}

          {/* <div className="col-lg-3 col-sm-6">
            <div className="productCard -type-1 text-center">
              <div className="productCard__image">
                <img
                  src="/assets/img/shop/products/1.png"
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
                <div className="text-17 fw-500 text-purple-1 mt-15">$55.00</div>

                <div className="productCard__button d-inline-block">
                  <a className="button -md -outline-purple-1 -rounded text-dark-1 mt-15">
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="productCard -type-1 text-center">
              <div className="productCard__image">
                <img
                  src="/assets/img/shop/products/2.png"
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
                <div className="text-17 fw-500 text-purple-1 mt-15">$55.00</div>

                <div className="productCard__button d-inline-block">
                  <a
                    href="#"
                    className="button -md -outline-purple-1 -rounded text-dark-1 mt-15"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="productCard -type-1 text-center">
              <div className="productCard__image">
                <img
                  src="/assets/img/shop/products/3.png"
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
                <div className="text-17 fw-500 text-purple-1 mt-15">$55.00</div>

                <div className="productCard__button d-inline-block">
                  <a
                    href="#"
                    className="button -md -outline-purple-1 -rounded text-dark-1 mt-15"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="productCard -type-1 text-center">
              <div className="productCard__image">
                <img
                  src="/assets/img/shop/products/4.png"
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
                <div className="text-17 fw-500 text-purple-1 mt-15">$55.00</div>

                <div className="productCard__button d-inline-block">
                  <a
                    href="#"
                    className="button -md -outline-purple-1 -rounded text-dark-1 mt-15"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ShopSingleRelatedProduct;
