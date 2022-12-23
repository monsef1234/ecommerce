import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { auth, db, storage } from "../firebase.config";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const signup = async (eo) => {
    eo.preventDefault();
    try {
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = useCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + userName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadUrl,
            });
          });
        }
      );
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <Helmet title={"Signup"}>
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h1 className="fw-600 fs-1 text-capitalize mb-3">login</h1>
              <Form onSubmit={signup}>
                <FormGroup>
                  <Input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    className="fs-5"
                    onChange={(eo) => setUserName(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    className="fs-5"
                    onChange={(eo) => setEmail(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Password"
                    className="fs-5"
                    onChange={(eo) => setPassword(eo.target.value)}
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="file"
                    required
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
