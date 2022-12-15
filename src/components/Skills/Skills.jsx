import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mongodb from "../../images/mongodb.svg";
import react from "../../images/react.svg";
import node from "../../images/node.svg";
import html from "../../images/html5.svg";
import js from "../../images/javascript.svg";
import bootstrap from "../../images/bootstrap.svg";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Skills = () => {
  return (
    <section className="mt-5 mb-5" id="skill">
      <Container
        className="pt-5 mb-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1 className="mt-4 pb-5 text-color text-center">Skills</h1>
        <Row>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={80}
                text="80%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img src={js} alt="" className="d-block mx-auto" width="50%" />
              <p className="text-center text-white">JavaScript</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={80}
                text="80%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img
                src={react}
                alt=""
                className="d-block mx-auto react-icon"
                width="50%"
              />
              <p className="text-center text-white">React</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={20}
                text="20%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img src={node} alt="" className="d-block mx-auto" width="50%" />
              <p className="text-center text-white">Node Js</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={25}
                text="25%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img
                src={mongodb}
                alt=""
                className="d-block mx-auto mongo-icon"
                width="50%"
              />
              <p className="text-center text-white">Mongo Db</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={90}
                text="90%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img src={html} alt="" className="d-block mx-auto" width="50%" />
              <p className="text-center text-white">HTML5</p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div>
              <CircularProgressbar
                value={95}
                text="95%"
                strokeWidth="4"
                styles={buildStyles({
                  textColor: "#fd4a57",
                  pathColor: "#fd4a57",
                })}
                className="progress-bar mb-4"
              />
              <img
                src={bootstrap}
                alt=""
                className="d-block mx-auto"
                width="50%"
              />
              <p className="text-center text-white">Bootstrap 5</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
