import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/ProductDetails.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import ProductsList from "../components/Products/ProductsList";
const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(addItem(item));
    toast.success("Product added successfully");
  };
  return (
    <Helmet title={"Product Details"}>
      <CommonSection title={"Details"} />
      <div className="product__details">
        <Container>
          <Row>
            <Col lg="6">
              <div className="img">
                <img src={product.imgUrl} alt={product.productName} />
              </div>
            </Col>
            <Col lg="6">
              <div className="details">
                <h2 className="pb-3">{product.productName}</h2>
                <div className="rating__wrapper pb-3">
                  <div className="stars">
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span></span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <div className="rating">
                    <p>
                      (<span>{product.avgRating}</span> ratings)
                    </p>
                  </div>
                </div>
                <div className="price pb-3">${product.price}</div>
                <p className="pb-3">{product.shortDesc} </p>
                <motion.button
                  onClick={() => addItemHandler(product)}
                  whileTap={{ scale: 1.1 }}
                  className="btn__add"
                >
                  add to carts
                </motion.button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <div className="options__wrapper d-flex gap-5 mb-4">
                <h4
                  style={{
                    fontWeight: tab === "desc" ? 600 : 400,
                    color: tab === "desc" ? "coral" : "inherit",
                  }}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h4>
                <h4
                  style={{
                    fontWeight: tab === "rev" ? 600 : 400,
                    color: tab === "rev" ? "coral" : "inherit",
                  }}
                  onClick={() => setTab("rev")}
                >
                  Reviwes ({product.reviews.length})
                </h4>
              </div>
              {tab === "desc" ? (
                <p className="mt-4 lh-lg">{product.description}</p>
              ) : (
                <div className="review__wrapper">
                  {product.reviews.map((item, index) => {
                    return (
                      <div className="review__content" key={index}>
                        <p className="rating">{item.rating} rating</p>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </Col>
          </Row>
          <div className="suggestions__wrapper">
            <Row>
              <ProductsList
                data={products.filter(
                  (item) =>
                    item.category === product.category && item.id !== product.id
                )}
              />
            </Row>
          </div>
        </Container>
      </div>
    </Helmet>
  );
};

export default ProductDetails;
