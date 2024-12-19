import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  padding: 10px;
`;

function Product({ children }) {
  return <Container>{children}</Container>;
}

const ProductHeader = ({ children }) => {
  return <div>{children}</div>;
};

const ProductPrice = ({ children }) => {
  return <div>{children}</div>;
};

Product.ProductHeader = ProductHeader;
Product.ProductPrice = ProductPrice;
export default Product;

const App = () => {
  return (
    <>
      <Product>
        <Product.ProductHeader>Product Engineer</Product.ProductHeader>
        <Product.ProductPrice>12</Product.ProductPrice>
      </Product>
      <Product>
        <Product.ProductPrice>12</Product.ProductPrice>
        <Product.ProductHeader>Product Engineer</Product.ProductHeader>
      </Product>
    </>
  );
};
