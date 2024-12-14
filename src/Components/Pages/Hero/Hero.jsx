import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../../../assets/bg.jpg";

const Hero = () => {
    return (
        <div
          className="hero-section position-relative w-100 vh-100 d-flex align-items-center justify-content-center"
        >
          {/* Full-Size Background Image */}
          <img
            src={heroImage}
            alt="Background"
            className="hero-image position-absolute w-100 h-100"
          />
    
          {/* Hero Content */}
          <Container fluid className="position-relative z-3 text-center">
            <Row className="align-items-center">
              <Col
                lg={6}
                md={8}
                sm={10}
                className="d-flex flex-column justify-content-center align-items-start gap-4"
              >
                {/* Animated Section */}
                <motion.div
                  className="w-100 h-auto rounded-md d-flex flex-column gap-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
                >
                  {/* Title */}
                  <motion.h1
                    className="display-4 fw-bold text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "linear", delay: 0.4 }}
                  >
                    Have a{" "}
                    <span className="text-success">Safe</span> <p>Journey</p>
                  </motion.h1>
    
                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "linear", delay: 0.6 }}
                  >
                    <Button
                      variant="success"
                      className="text-white fw-medium px-4 py-2 rounded"
                      style={{ transition: "background-color 0.3s ease-in-out" }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#155724")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#198754")
                      }
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      );
};

export default Hero;