import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Services.scss";
import { motion } from "framer-motion";
import serviceData from "../../assets/data/serviceData";
const Services = () => {
  return (
    <div className="services__section">
      <Container>
        <Row>
          {serviceData.map((service, index) => {
            return (
              <Col lg="3" md="4" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="service"
                  style={{ background: service.bg }}
                >
                  <span className="service__icon">
                    <i className={service.icon}></i>
                  </span>
                  <div className="service__content">
                    <h4>{service.title}</h4>
                    <p>{service.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
