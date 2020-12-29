import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = ({ title, paragraphs, phone, email, address }) => {
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
        <Row className="pt-5">
          <Col md="6">
            <Row>
              <Col className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="3x"
                  className="text-primary mr-4"
                />
                <h2 className="h4 text-white font-weight-normal">{phone}</h2>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="3x"
                  className="text-primary mr-4"
                />
                <h2 className="h4 text-white font-weight-normal">{email}</h2>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <iframe
              title="King's Closet's Location"
              frameborder="0"
              style={{ border: "none" }}
              src={`https://www.google.com/maps/embed/v1/place?key=${
                process.env.GATSBY_MAPS_API_KEY
              }&q=${encodeURI(address)}`}
            />
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
  email: "contact@kingscloset.org",
  phone: "214 478 7087",
  address: "18492 FM2755, Fate, TX 75189",
}

export default Contact
