import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/Products/ProductsList";
import "../styles/Shop.scss";
const getCategories = (items, value) => {
  return [...new Set([...items.map((item) => item[value])])];
};
const Shop = () => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState(null);
  let categories = getCategories(products, "category");
  categories = ["all", ...categories];
  const changeHandler = (eo) => {
    const { value } = eo.target;
    setCategory(value);
  };
  const searchHandler = (eo) => {
    const { value } = eo.target;
    setSearch(value);
  };

  const optionsHandler = () => {
    let productsArr = [...products];
    if (category !== "all") {
      productsArr = productsArr.filter((item) => item.category === category);
    }
    if (search) {
      productsArr = products.filter((item) => item.category.includes(search));
    }
    setSearchProducts(productsArr);
  };
  useEffect(() => {
    optionsHandler();
  }, [category, search]);
  return (
    <Helmet title={"Shop"}>
      <CommonSection title={"Products"} />
      <div className="filter__section">
        <Container>
          <Row>
            <Col lg="3">
              <select onChange={changeHandler}>
                {categories.map((i, idx) => {
                  return (
                    <option value={i} key={idx}>
                      {`${i.charAt(0).toUpperCase() + i.slice(1)}`}
                    </option>
                  );
                })}
              </select>
            </Col>
            <Col lg="9">
              <div className="search__section">
                <div>
                  <h5>sort by</h5>
                </div>
                <div className="search">
                  <input
                    onChange={searchHandler}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {searchProducts.length > 0 ? (
              <ProductsList data={searchProducts} />
            ) : (
              <h2 className="text-center mt-5">No Products are found</h2>
            )}
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Shop;
