import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import code from "../../images/code.svg";
import responsive from "../../images/responsive.svg";
import currency from "../../images/currency.svg";
const Services = () => {
  return (
    <section className="mt-5 mb-5" id="services">
      <Container className="pt-5" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="pt-2 mb-5 text-color text-center">My Services</h1>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="mb-5 px-4 card-content section-card-bg">
              <img src={code} alt="" width="12%" className="ms-4 mt-4" />
              <Card.Body>
                <Card.Title className="mb-3 text-white">
                  Web Development
                </Card.Title>
                <Card.Text className="text-justify mb-4 text-white">
                  I will make a clean, unique, and professional-looking website.
                  My design must be responsive on all devices, pixel-perfect,
                  and have clean coding. I hope, I can help you to make an
                  awesome website for your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="mb-5 px-4 card-content section-card-bg">
              <img src={responsive} alt="" width="15%" className="ms-4 mt-4" />
              <Card.Body>
                <Card.Title className="mb-3 text-white">
                  Responsive Design
                </Card.Title>
                <Card.Text className="text-justify mb-3 text-white">
                  I will provide you with excellent web design services. Your
                  website will be loaded first and it will show perfectly on
                  every device. I believe in providing the best experience, the
                  best designs, and the best results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className="mb-5 px-4 card-content section-card-bg">
              <img src={currency} alt="" width="15%" className="ms-4 mt-4" />
              <Card.Body>
                <Card.Title className="mb-3 text-white">
                  Reasonable Cost
                </Card.Title>
                <Card.Text className="text-justify text-white">
                  I work closely with my clients on each project to create not
                  only an amazing design that will help the business grow but to
                  create a long-term relationship of trust and caring.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
