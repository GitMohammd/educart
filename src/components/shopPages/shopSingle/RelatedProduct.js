import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UseCourseContext from "../../context/cartContext/UseCourseContext";

function RelatedProduct({ product }) {
  const { id, img, instructor, language, lavel, lesson, name } = product;
  const {
    getCourseQuantity,
    increaseCourseQuantity,
    decreaseCourseQuantity,
    removeCourseQuantity,
  } = UseCourseContext();
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="productCard -type-1 text-center">
        <div className="productCard__image">
          <img src={img} alt="Product image" />

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
          <h4 className="text-17 fw-500 mt-15">{name}</h4>
          <div className="text-17 fw-500 text-purple-1 mt-15">$55.00</div>

          <div className="productCard__button d-inline-block">
            <button
              onClick={() => increaseCourseQuantity(id)}
              className="button -md -outline-purple-1 -rounded text-dark-1 mt-15"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
