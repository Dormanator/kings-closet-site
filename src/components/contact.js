import React from "react"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

const Contact = ({ title, paragraphs }) => {
  return (
    <div id="contact" className="bg-secondary pt-4 pb-5">
      <Container>
        <Row className="">
          <Col className="text-center">
            <h1 className="display-4 text-primary border-bottom border-white mb-3">
              {title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-white">
            {paragraphs.map((p, i) => (
              <p className="lead" key={`contact-p-${i}`}>
                {p}
              </p>
            ))}
          </Col>
        </Row>
        <Row className="pt-3">
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={() => console.log("Submitted")}>
              <Row>
                <Col md="6">
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      aria-label="Name"
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <Form.Text className="text-white">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Message"
                      aria-label="Message"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className="text-white"
                  >
                    Get in Touch!
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Contact.defaultProps = {
  title: "Contact",
  paragraphs: [
    "Do you want to schedule a donation drop-off or a time to volunteer? Want to find out how you can help?",
  ],
}

export default Contact
