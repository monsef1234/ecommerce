import { motion } from "framer-motion";
import React from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import CommonSection from "../components/CommonSection/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/Checkout.scss";
const Checkout = () => {
  return (
    <Helmet title={"Checkout"}>
      <CommonSection title={"Checkout"} />
      <div className="checkout__container">
        <Container>
          <Row>
            <Col lg="8">
              <div className="form__wrapper">
                <h5>billing information</h5>
                <Form className="ps-4">
                  <FormGroup floating>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="name"
                    />
                    <Label for="name">Name</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <Label for="email">Email</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="number"
                      name="number"
                      placeholder="Number"
                      type="number"
                    />
                    <Label for="number">Number</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Street Address"
                      type="text"
                    />
                    <Label for="address">Street Address</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="city"
                      name="city"
                      placeholder="City"
                      type="text"
                    />
                    <Label for="city">City</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="postal"
                      name="postal"
                      placeholder="Postal Code"
                      type="number"
                    />
                    <Label for="postal">Postal Code</Label>
                  </FormGroup>
                  <FormGroup floating>
                    <Input
                      id="country"
                      name="country"
                      placeholder="Country"
                      type="text"
                    />
                    <Label for="country">Country</Label>
                  </FormGroup>
                </Form>
              </div>
            </Col>
            <Col lg="4">
              <div className="checkout__wrapper">
                <div className="checkout__item">
                  <p>total qty:</p>
                  <span>3 items</span>
                </div>
                <div className="checkout__item">
                  <p>subtotal</p>
                  <span>$1291</span>
                </div>
                <div className="checkout__item">
                  <p>
                    shipping: <br /> free shipping
                  </p>
                  <span>$0</span>
                </div>
                <div className="checkout__item total">
                  <p>total cost:</p>
                  <span>$1291</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="order__btn"
                >
                  place an order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Checkout;
