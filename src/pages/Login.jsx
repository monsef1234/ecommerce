import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import {signInWithEmailAndPassword } from "firebase/auth"
import "../styles/Login.scss";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logIn } from "../store/authSlice";
const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const navigate = useNavigate()
    const loginHandler = (eo) => {
    eo.preventDefault()
    signInWithEmailAndPassword(auth, email, passowrd).then((useCredential) => {
      const user = useCredential.user
      dispatch(logIn(user))
      navigate("/")
    }).catch((error) => {
      toast.error("Wrong email or password ")
    })
  }
  return (
    <Helmet title={"Login"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className="fw-600 fs-1 text-capitalize mb-3">login</h1>
              <Form onSubmit={loginHandler}>
                <FormGroup>
                  <Input
                    type="email"
                    
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
