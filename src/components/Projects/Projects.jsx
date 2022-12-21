import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const handleSubmit = (link) => {
    window.open(link);
  };
  return (
    <section className="mt-5 mb-5 section-bg" id="project">
      <Container className="pt-5 mb-5">
        <Row>
          <Col lg={5} md={12} sm={12} className="me-5">
            <h1
              className="mt-5 mb-5 text-color"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              Take a look at the latest projects I’ve done
            </h1>
            <Card
              className="mb-5 project-card-bg"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <Link
                onClick={() =>
                  handleSubmit("https://resell-market-43d50.web.app/")
                }
              >
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/6sYVJsg/resale.jpg"
                  className="project-img"
                />
              </Link>
              <Card.Body className="rounded border border-danger border-top-0">
                <div className="d-flex justify-content-between mb-4">
                  <Card.Title className="fs-4 text-white">
                  Music Instruments
                  </Card.Title>
                  <Link to={`/project-details/${1}`}>
                    <Button className="rounded-pill px-4 btn-bg">
                      explore More
                    </Button>
                  </Link>
                </div>

                <Card.Text className="text-justify text-white">
                  Sonic Revolution is an online secondhand marketplace where
                  people can advertise their products. It has three roles and
                  each role has a separate dashboard where the user, seller, and
                  admin can manage their actions.
                </Card.Text>
              </Card.Body>
            </Card>
            <div>
              <Card
                className="mb-5 project-card-bg"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link
                  onClick={() =>
                    handleSubmit("https://skill-platform-bfb62.web.app/")
                  }
                >
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/1ZxNvVf/skill.jpg"
                    className="project-img"
                  />
                </Link>
                <Card.Body className="rounded border border-danger border-top-0">
                  <div className="d-flex justify-content-between mb-4">
                    <Card.Title className="text-white fs-4">
                      Skill Platform
                    </Card.Title>
                    <Link to={`/project-details/${2}`}>
                      <Button className="rounded-pill px-4 btn-bg">
                        explore More
                      </Button>
                    </Link>
                  </div>

                  <Card.Text className="text-white text-justify">
                    Skill Platform is an e-learning website where people can buy
                    courses of their choice. Being an e-learning website, people
                    can view and purchase courses of their choices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col lg={5} md={12} sm={12}>
            <div className=" mt-5 mb-5">
              <Card
                className="mb-5 project-card-bg"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <Link
                  onClick={() =>
                    handleSubmit("https://delivery-services-a1363.web.app/")
                  }
                >
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/HzWyFGH/services.jpg"
                    className="project-img"
                  />
                </Link>
                <Card.Body className="rounded border border-danger border-top-0">
                  <div className="d-flex justify-content-between mb-4">
                    <Card.Title className="text-white fs-4">
                      Service Review{" "}
                    </Card.Title>
                    <Link to={`/project-details/${3}`}>
                      <Button className="rounded-pill px-4 btn-bg">
                        explore More
                      </Button>
                    </Link>
                  </div>

                  <Card.Text className="text-justify text-white">
                    Service Review is an online website where people can review
                    and order their products. People can provide re-evaluation
                    of their ordered products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="mb-5">
              <Card
                className="mb-5 project-card-bg"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link
                  onClick={() =>
                    handleSubmit("https://speed-monster-9607b2.netlify.app/")
                  }
                >
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/1Lb6sHC/typing.png"
                    className="project-img"
                  />
                </Link>
                <Card.Body className="rounded border border-danger border-top-0">
                  <div className="d-flex justify-content-between mb-4">
                    <Card.Title className="text-white">Speed Typer</Card.Title>
                    <Link to={`/project-details/${4}`}>
                      <Button className="rounded-pill px-4 btn-bg">
                        explore More
                      </Button>
                    </Link>
                  </div>

                  <Card.Text className="text-white text-justify">
                    Fitness Gear is an online fitness routine check website
                    where people can check their fitness routine. One of its
                    advantages is that people can easily monitor their fitness
                    routine at home and create their own fitness increase
                    accordingly.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
