import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { toast } from "react-toastify";
import {addDoc, collection, doc, setDoc} from "firebase/firestore"
import { db } from "../firebase.config";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const signupHandler = async (eo) => {
    eo.preventDefault()
    const res = await addDoc(collection(db, "cities"), {
      name: userName,
      state: "CA",
      country: "USA",
    })
    console.log(res);
    }
  return (
    <Helmet title={"Signup"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className="fw-600 fs-1 text-capitalize mb-3">login</h1>
              <Form onSubmit={signupHandler}>
                <FormGroup>
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    className="fs-5"
                    onChange={(eo) => setUserName(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    className="fs-5"
                    onChange={(eo) => setEmail(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    
                    autoComplete="off"
                    placeholder="Enter Your Password"
                    className="fs-5"
                    onChange={(eo) => setPassword(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="file"
                    
                    placeholder="Enter Your File"
                    onChange={(eo) => setFile(eo.target.files[0])}
                  ></Input>
                </FormGroup>
                <button type="submit">Signup</button>
                <p className="pt-3">
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Login</Link>
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

export default Signup;
