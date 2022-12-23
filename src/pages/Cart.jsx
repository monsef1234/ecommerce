import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { removeItem } from "../store/cartSlice";
import "../styles/Cart.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Helmet title={"Cart"}>
      <CommonSection title={"Shopping Cart"} />
      <Container>
        {cartItems.length > 0 ? (
          <div className="cart__section">
            <Row>
              <Col lg="9">
                <table width="80%">
                  <tr>
                    <th style={{ width: "20%" }}>image</th>
                    <th style={{ width: "40%" }}>title</th>
                    <th>price</th>
                    <th>qty</th>
                    <th>delete</th>
                  </tr>
                  {cartItems.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img src={item.imgUrl} alt={item.productName} />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => dispatch(removeItem(item))}
                          >
                            <i className="ri-delete-bin-fill"></i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </Col>
              <Col lg="3">
                <div className="total__wrapper d-flex flex-column gap-3">
                  <div className="total d-flex align-items-center justify-content-between">
                    <h4>subtotal</h4>
                    <span>${totalAmount}</span>
                  </div>
                  <p>taxes and shipping will calculate in checkout</p>
                  <button className="btn__continue">
                    <Link to="/shop">continue shopping</Link>
                  </button>
                  <button className="btn__checkout">
                    <Link to="/checkout">checkout</Link>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <h1 className="text-center m-5">No Product Added</h1>
        )}
      </Container>
    </Helmet>
  );
};

export default Cart;
