import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../components/Services/Services";
import ProductsList from "../components/Products/ProductsList";
import products from "../assets/data/products";
import Countdown from "../components/Countdown/Countdown";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState(products);
  const [bestSales, setBestSales] = useState(products);
  const [mobiles, setMobiles] = useState(products);
  const [wireless, setWireless] = useState(products);
  const [popular, setPopular] = useState(products);
  useEffect(() => {
    const tempProducts = trendingProduct.filter(
      (product) => product.category === "chair"
    );
    const bestSalesProduct = bestSales.filter(
      (product) => product.category === "sofa"
    );
    const mobileProduct = mobiles.filter(
      (product) => product.category === "mobile"
    );
    const wirlessProduct = wireless.filter(
      (product) => product.category === "wireless"
    );
    const watchProduct = popular.filter(
      (product) => product.category === "watch"
    );
    setMobiles(mobileProduct);
    setTrendingProduct(tempProducts);
    setBestSales(bestSalesProduct);
    setWireless(wirlessProduct);
    setPopular(watchProduct);
  }, []);
  return (
    <Helmet title={"Home"}>
      <div className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p>Trending product in {new Date().getFullYear()}</p>
                <h2>make your interior more minimalstic & modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  at ratione perferendis ullam illo obcaecati similique maiores
                  magnam, nam, perspiciatis maxime ea tenetur fugiat. Sapiente
                  mollitia enim quos similique labore.
                </p>
                <motion.button whileHover={{ scale: 1.1 }} className="buy__btn">
                  <Link to="/shop">shop now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6" className="d-flex align-items-center">
              <div className="hero__img">
                <img src={heroImg} alt="hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Services />
      <div className="trending__products">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center">trending products</h1>
            </Col>
            <ProductsList data={trendingProduct} />
          </Row>
        </Container>
      </div>
      <div className="best__sales">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center">best sales</h1>
            </Col>
            <ProductsList data={bestSales} />
          </Row>
        </Container>
      </div>
      <Countdown />
      <div className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center">new arrivals</h1>
            </Col>
            <ProductsList data={mobiles} />
            <ProductsList data={wireless} />
          </Row>
        </Container>
      </div>
      <div className="popular__category">
        <Container>
          <Row>
            <Col lg="12">
              <h1 className="text-center">popular in category</h1>
            </Col>
            <ProductsList data={popular} />
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Home;
