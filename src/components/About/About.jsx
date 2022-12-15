import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
const About = () => {
  const handleSubmit = (link) => {
    window.open(link);
  };
  return (
    <section className="mt-5 mb-5 section-bg" id="about">
      <Container className="pt-5" data-aos="fade-up" data-aos-duration="1500">
        <h2 className="mt-5 mb-5 text-color text-center">Learn About Me</h2>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Card className="mb-5 card-bg">
              <Row>
                <Col
                  lg={4}
                  md={12}
                  sm={12}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/PCwM5yR/about-pic.png"
                    className="img-fluid mb-4 rounded-4 border-bottom border-danger"
                  />
                </Col>
                <Col
                  lg={8}
                  md={12}
                  sm={12}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="d-flex flex-column align-items-center justify-content-center"
                >
                  <Card.Body>
                    <Card.Text className="text-justify text-white mt-5 fs-5">
                      I believe that to be successful in life, one needs to be
                      obsessive with their dreams and keep working towards them.
                      That's why I am learning and mastering web development. I
                      have a lot of interest in Saas products and Blockchain
                      Development. I want to work on this field, if I get an
                      opportunity.
                    </Card.Text>
                    <Row>
                      <Col lg={6} md={6} sm={12}>
                        <p className="text-white fs-5">
                        <span className="text-color">Email</span>: ashikur.rahman9997@gmail.com
                        </p>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <p className="text-white fs-5">
                          <span className="text-color">Phone</span>: +8801782-231717
                        </p>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <p className="text-white fs-5">
                        <span className="text-color">City</span>: Rajshahi, Bangladesh
                        </p>
                      </Col>
                      <Col lg={6} md={6} sm={12}>
                        <p className="text-white fs-5">
                        <span className="text-color">Degree</span>: B.Sc in CSE</p>
                      </Col>                     
                      
                      <Col lg={6} md={2} sm={2}>
                        <div className="mt-4">                        
                          <Link                          
                            onClick={() =>
                              handleSubmit("https://www.facebook.com/ar.ashik.9997")
                            }
                          >
                            <img src={facebook} alt="" width="10%" />
                          </Link>
                          <Link
                          className="ms-3"
                            onClick={() =>
                              handleSubmit("https://www.linkedin.com/in/ashikur-rahman-1b0b08130/")
                            }
                          >
                            <img src={linkedin} alt="" width="10%" />
                          </Link>
                          <Link
                          className="ms-3"
                            onClick={() =>
                              handleSubmit("https://github.com/AR-Ashik-9997")
                            }
                          >
                            <img src={github} alt="" width="10%" />
                          </Link> 
                          </div>                      
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
