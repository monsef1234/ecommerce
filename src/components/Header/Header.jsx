import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import user from "../../assets/images/user-icon.png";
import "./Header.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    { path: "/", display: "Home" },
    { path: "/shop", display: "Shop" },
    { path: "/cart", display: "Cart" },
  ];
  const header = useRef(null);
  const headerSticky = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.current.classList.add("header__sticky");
      } else {
        header.current.classList.remove("header__sticky");
      }
    });
  };
  useEffect(() => {
    headerSticky();
    return () => window.removeEventListener("scroll", headerSticky);
  }, [headerSticky]);
  return (
    <header ref={header}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <span>multimart</span>
            </div>
            <div
              className={active ? "nav__links mobile__active" : "nav__links"}
              onClick={() => setActive(false)}
            >
              <ul className="menu">
                {navLinks.map((link, idx) => {
                  return (
                    <li className="nav__link" key={idx}>
                      <NavLink
                        onClick={() => setActive(false)}
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "nav__active" : null
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={() => navigate("/cart")}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span className="user__icon">
                <motion.img whileTap={{ scale: 1.1 }} src={user} alt="user" />
              </span>
              <div className="mobile__menu" onClick={() => setActive(true)}>
                <span className="bar__icon">
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
