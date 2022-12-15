import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import resume from "../../file/Full-Stack-developper.pdf";
import Services from "../Services/Services";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
const Home = () => {
  return (
    <>
      <section className="mt-5 mb-5" id="home">
        <Container>
          <Row className="flex-column flex-lg-row">
            <Col
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <img
                src="https://i.ibb.co/qBY06mC/main-pic.png"
                alt=""
                className="img-fluid mx-auto d-block rounded-pill border-bottom border-danger"
              />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <div className="mt-5">
                <h1 className="fs-1 text-white">I am Ashikur Rahman</h1>
                <p className="w-75 text-justify mt-4 fs-5 text-white">
                  I'm a <span className="text-color">Full Stack Developer</span> focused on developing Javascript
                  based web applications. I love to manage everything from
                  complex logic to the awesome layout of a web application.
                </p>

                <Nav.Link href={resume}>
                  <Button className="rounded-pill px-4 mt-4 btn-bg">
                    My Resume
                  </Button>
                </Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contacts />
    </>
  );
};

export default Home;
