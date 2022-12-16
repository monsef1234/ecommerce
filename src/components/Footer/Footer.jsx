import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="4">
            <div className="footer__info">
              <div className="logo">
                <img src={logo} alt="logo" />
                <span>multimart</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
                commodi omnis. Cumque, dolores. Molestiae temporibus asperiores
                laudantium! Ipsam dolor, eos eveniet eius suscipit reiciendis ab
                dicta illum in a impedit?
              </p>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__links">
              <div className="footer__title">
                <h4>top categories</h4>
              </div>
              <ListGroup>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/">mobile phones</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/">modern sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/">arm chair</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/">smart watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__links">
              <div className="footer__title">
                <h4>useful links</h4>
              </div>
              <ListGroup>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/shop">shop</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/cart">cart</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/login">login</Link>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0">
                  <Link to="/">privacy police</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__links">
              <div className="footer__title">
                <h4>contact</h4>
              </div>
              <ListGroup>
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i className="ri-map-pin-fill"></i>
                  </span>
                  <p>bouzouran, batna, algeria</p>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <p>+213794693243</p>
                </ListGroupItem>
                <ListGroupItem className="px-0 border-0 d-flex align-items-center gap-3">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <div>
                    <a href="mailto:monsef4566@gmail.com">
                      monsef4566@gmail.com
                    </a>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
