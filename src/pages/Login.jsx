import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  return (
    <Helmet title={"Login"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className="fw-600 fs-1 text-capitalize mb-3">login</h1>
              <Form>
                <FormGroup>
                  <Input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    className="fs-5"
                    onChange={(eo) => setEmail(eo.target.value)}
                    value={email}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Password"
                    className="fs-5"
                    onChange={(eo) => setPassowrd(eo.target.value)}
                    value={passowrd}
                  ></Input>
                </FormGroup>
                <button type="submit">Login</button>
                <p className="pt-3">
                  Don't have an account?{" "}
                  <span>
                    <Link to="/signup">Create an Account</Link>
                  </span>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
