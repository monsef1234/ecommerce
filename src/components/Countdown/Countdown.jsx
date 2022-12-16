import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import img from "../../assets/images/counter-timer-img.png";
import "./Countdown.scss";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });
  const destination = new Date(2024, 11, 13).getTime();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = destination - now;
  //     let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor(
  //       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  //     if (destination < 0) {
  //       clearInterval(interval);
  //     } else {
  //       days = days < 10 ? `0${days}` : days;
  //       hours = hours < 10 ? `0${hours}` : hours;
  //       minutes = minutes < 10 ? `0${minutes}` : minutes;
  //       seconds = seconds < 10 ? `0${seconds}` : seconds;
  //       setCountdown({ days, hours, minutes, seconds });
  //     }
  //   }, 0);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="product__countdown">
      <Container>
        <Row>
          <Col lg="6">
            <div className="countdown__content py-3">
              <h4>limited offers</h4>
              <h3>quality armchair</h3>
            </div>
            <div className="clock__wrapper pb-5">
              <div className="clock__data text-center">
                <div>
                  <h1>{countdown.days}</h1>
                  <h5>Days</h5>
                </div>
                <span>:</span>
                <div>
                  <h1>{countdown.hours}</h1>
                  <h5>Hours</h5>
                </div>
                <span>:</span>
                <div>
                  <h1>{countdown.minutes}</h1>
                  <h5>Minutes</h5>
                </div>
                <span>:</span>
                <div>
                  <h1>{countdown.seconds}</h1>
                  <h5>Seconds</h5>
                </div>
              </div>
            </div>
            <motion.button whileTap={{ scale: 1.1 }} className="store__btn">
              <Link to="/store">visit store</Link>
            </motion.button>
          </Col>
          <Col lg="6" className="d-flex flex-row-reverse">
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Countdown;
