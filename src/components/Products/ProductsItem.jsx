import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { addItem } from "../../store/cartSlice";

const ProductsItem = ({ product }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
    toast.success("Product added successfully");
  };
  return (
    <Col lg="3" className="d-flex">
      <div className="product__item d-flex flex-column justify-content-between">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={product.imgUrl}
            alt={product.productName}
          />
        </div>
        <div className="product__info pt-2">
          <h4>
            <Link to={`/shop/${product.id}`}>{product.productName}</Link>
          </h4>
          <span>{product.category}</span>
        </div>
        <div className="product__price d-flex align-items-center justify-content-between pt-2">
          <span className="price">${product.price}</span>
          <motion.span
            onClick={() => addItemHandler(product)}
            whileTap={{ scale: 1.2 }}
            className="add__btn"
          >
            +
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductsItem;
