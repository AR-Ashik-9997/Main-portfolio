import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useLoaderData } from "react-router-dom";
import sonic_1 from "../../images/sonic-1.png";
import sonic_2 from "../../images/sonic-allProduct.png";
import sonic_3 from "../../images/admin-dashboard.png";
import skill_1 from "../../images/skill-1.png";
import skill_2 from "../../images/skill-2.png";
import skill_3 from "../../images/skill-3.png";
import service_1 from "../../images/service-1.png";
import service_2 from "../../images/service-2.png";
import service_3 from "../../images/service-3.png";
import fitness_1 from "../../images/fitness-1.png";
import fitness_2 from "../../images/fitness-2.png";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const projectId = useLoaderData();
  const handleSubmit = (link) => {
    window.open(link);
  };
  return (
    <>
      {projectId === "1" ? (
        <section className="mt-5 mb-5" id="project-details">
          <Container className="pt-5">
            <Row className="g-5">
              <Col
                lg={6}
                md={12}
                sm={12}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <Carousel autoPlay={true} infiniteLoop={true}>
                  <div>
                    <img src={sonic_1} alt="" />
                  </div>
                  <div>
                    <img src={sonic_2} alt="" />
                  </div>
                  <div>
                    <img src={sonic_3} alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <h1 className="text-white mb-3">Sonic Revolution</h1>
                <p className="text-justify text-white">
                Sonic Revolution is an online secondhand marketplace where
                  people can advertise their products. It has three roles and
                  each role has a separate dashboard where the user, seller, and
                  admin can manage their actions.
                </p>
                <div className="mt-4 mb-4">
                  <Link
                    onClick={() =>
                      handleSubmit("https://resell-market-43d50.web.app/")
                    }
                  >
                    <Button className="rounded-pill px-4 btn-bg">
                      Live Site
                    </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/music-instruments")
                    }
                  >                  
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Client Site
                  </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/music-instrument-server")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Server Site
                  </Button>
                  </Link>
                </div>

                <h1 className="text-white">Features</h1>
                <ul className="text-white">
                  <li>CRUD Operation</li>
                  <li>NodeJS authentication with JWT</li>
                  <li>User and Admin Dashboard</li>
                  <li>Stripe Payment Geteway</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : projectId === "2" ? (
        <section className="mt-5 mb-5" id="project-details">
          <Container className="pt-5">
            <Row className="g-5">
              <Col
                lg={6}
                md={12}
                sm={12}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <Carousel autoPlay={true} infiniteLoop={true}>
                  <div>
                    <img src={skill_1} alt="" />
                  </div>
                  <div>
                    <img src={skill_2} alt="" />
                  </div>
                  <div>
                    <img src={skill_3} alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <h1 className="text-white mb-3">Skill Platform</h1>
                <p className="text-justify text-white">
                  Skill Platform is an e-learning website where people can buy
                  courses of their choice. Being an e-learning website, people
                  can view and purchase courses of their choices.
                </p>
                <div className="mt-4 mb-4">
                  <Link
                    onClick={() =>
                      handleSubmit("https://skill-platform-bfb62.web.app/")
                    }
                  >
                    <Button className="rounded-pill px-4 btn-bg">
                      Live Site
                    </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/Learning-Platform")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Client Site
                  </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/Learning-Platform-Server")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Server Site
                  </Button>
                  </Link>
                </div>

                <h1 className="text-white">Features</h1>
                <ul className="text-white">
                  <li>CRUD Operation</li>
                  <li>NodeJS authentication with JWT</li>
                  <li>Firebase Authentication With Social Site</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : projectId === "3" ? (
        <section className="mt-5 mb-5" id="project-details">
          <Container className="pt-5">
            <Row className="g-5">
              <Col
                lg={6}
                md={12}
                sm={12}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <Carousel autoPlay={true} infiniteLoop={true}>
                  <div>
                    <img src={service_1} alt="" />
                  </div>
                  <div>
                    <img src={service_2} alt="" />
                  </div>
                  <div>
                    <img src={service_3} alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <h1 className="text-white mb-3">Online Delivery Service</h1>
                <p className="text-justify text-white">
                  Service Review is an online website where people can review
                  and order their products. People can provide re-evaluation of
                  their ordered products.
                </p>
                <div className="mt-4 mb-4">
                  <Link
                    onClick={() =>
                      handleSubmit("https://delivery-services-a1363.web.app/")
                    }
                  >
                    <Button className="rounded-pill px-4 btn-bg">
                      Live Site
                    </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/Service-Review")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Client Site
                  </Button>
                  </Link>
                
                  <Link
                    onClick={() =>
                      handleSubmit("  https://github.com/AR-Ashik-9997/Service-Review-Server")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Server Site
                  </Button>
                  </Link>
                </div>

                <h1 className="text-white">Features</h1>
                <ul className="text-white">
                  <li>CRUD Operation</li>
                  <li>NodeJS authentication with JWT</li>
                  <li>User Dashboard</li>
                  <li>Firebase Authentication With Social Site</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : projectId === "4" ? (
        <section className="mt-5 mb-5" id="project-details">
          <Container className="pt-5">
            <Row className="g-5">
              <Col
                lg={6}
                md={12}
                sm={12}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <Carousel autoPlay={true} infiniteLoop={true}>
                  <div>
                    <img src={fitness_1} alt="" />
                  </div>
                  <div>
                    <img src={fitness_2} alt="" />
                  </div>
                </Carousel>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <h1 className="text-white mb-3">Fitness Gear</h1>
                <p className="text-justify text-white">
                  Fitness Gear is an online fitness routine check website where
                  people can check their fitness routine. One of its advantages
                  is that people can easily monitor their fitness routine at
                  home and create their own fitness increase accordingly.
                </p>
                <div className="mt-4 mb-4">
                  <Link
                    onClick={() =>
                      handleSubmit("https://fitness-gear-03372d.netlify.app/")
                    }
                  >
                    <Button className="rounded-pill px-4 btn-bg">
                      Live Site
                    </Button>
                  </Link>
                  <Link
                    onClick={() =>
                      handleSubmit("https://github.com/AR-Ashik-9997/Fitness-Gear")
                    }
                  >
                  <Button className="rounded-pill px-4 btn-bg ms-4">
                    Client Site
                  </Button>
                  </Link>
                </div>

                <h1 className="text-white">Features</h1>
                <ul className="text-white">
                  <li>CRUD Operation</li>
                  <li>Data Store using Local Storage</li>
                  <li>Database using Json</li>
                  <li>Completing notification using Toaster</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectDetails;
