import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const notify = () => toast.success("Email sent successfully.");

  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
    if (EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7fz98dw",
        "template_008ym0p",
        form.current,
        "gOFaU8Dkgb5g-0h8Z"
      )
      .then(
        (result) => {
          notify();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="mt-5 mb-5 section-bg" id="contact-Me">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Card className="mt-5 mb-5 contact-Me">
              <Row className="flex-column-reverse flex-lg-row">
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="d-flex flex-column align-items-center justify-content-center "
                >
                  <div className="bg-background w-75 rounded-4 mx-auto mt-5 mb-5">
                    <h1 className="text-center mb-4 pt-5 text-color">
                      Contact Us
                    </h1>
                    <Form ref={form} onSubmit={sendEmail}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                          type="text"
                          placeholder="name"
                          name="user_name"
                          required
                          autoComplete="off"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicemail">
                        <Form.Control
                          type="email"
                          placeholder="email"
                          name="user_email"
                          onChange={handleEmailChange}
                          required
                          autoComplete="off"
                        />
                        <Form.Text className="text-danger">
                          {errors.email}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group
                        className="mb-4"
                        controlId="formBasicDescription"
                      >
                        <textarea
                          name="message"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Your Description here...."
                          rows="3"
                          autoComplete="off"
                          required
                        />
                      </Form.Group>
                      <div className="d-flex justify-content-center">
                        <Button
                          type="submit"
                          value="Send"
                          className="rounded-pill px-4 mt-4 btn-bg"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Col>
                <Col
                  lg={6}
                  md={12}
                  sm={12}
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="d-flex flex-column align-items-center justify-content-center "
                >
                  <div className="mt-5 pt-5">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/006/202/074/original/flat-isometric-concept-illustration-send-email-data-from-smartphone-to-computer-free-vector.jpg"
                      alt=""
                      className="d-block img-fluid mx-auto rounded"
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Toaster />
    </section>
  );
};

export default Contacts;
