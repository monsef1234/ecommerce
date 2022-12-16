import React from "react";
import ProductsItem from "./ProductsItem";
import "./ProductsList.scss";
const ProductsList = ({ data }) => {
  return (
    <>
      {data.map((product) => {
        return <ProductsItem key={product.id} product={product} />;
      })}
    </>
  );
};

export default ProductsList;
