import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

const GetInvolved = ({ title, sections }) => {
  const data = useStaticQuery(graphql`
    query {
      closet: file(relativePath: { eq: "closet.png" }) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      volunteers: file(relativePath: { eq: "volunteers.png" }) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div id="get-involved">
      <Container>
        <Row className="pt-5">
          <Col className="text-center">
            <h1 className="display-4 text-primary border-bottom border-secondary mb-3">
              {title}
            </h1>
          </Col>
        </Row>
        {sections.map((section, i) => (
          <Row className="pt-3" key={`section-${i}`}>
            <Col md="4">
              <Img
                fluid={data[section.img.name].childImageSharp.fluid}
                alt={section.img.alt}
                className="rounded mt-0 mb-3 mt-md-5 mb-md-0"
              />
            </Col>
            <Col md="8">
              <h2 className="h3 font-weight-normal">{section.heading}</h2>
              {section.paragraphs.map((p, j) => (
                <p className="lead" key={`section-${i}-p-${j}`}>
                  {p}
                </p>
              ))}
            </Col>
          </Row>
        ))}
        <Row className="pt-3">
          <Col xs="12" className="d-flex justify-content-center mt-md-3 mb-3">
            <Button
              href="https://goo.gl/maps/kExbbEyD8JmaDCRKA"
              target="_blank"
              variant="primary"
              size="lg"
              className="text-white"
            >
              View the Closet's Location
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

GetInvolved.propTypes = {
  title: PropTypes.string.isRequired,
}

GetInvolved.defaultProps = {
  title: "Get Involved",
  sections: [
    {
      img: {
        name: "closet",
        alt: "The closet full of sorted clothing donations.",
      },
      heading: "Give to the Closet",
      paragraphs: [
        "Seventy-five percent of our homeless is men and twenty-five percent is women. We always have a shortage of men’s clothing.",
        "We accept: Shirts, sweaters, sweat shirts, hoodies, jackets, coats, thermal underwear, raincoats, pants, shorts, socks, underwear, bras, belts, purses, shoes, boots, blankets, towels, backpacks, jewelry, dresses, skirts, sun glasses, reading glasses, toiletries, suitcases, bags, children’s/baby clothes, diapers, formula, strollers, maternity clothes, school uniforms.",
      ],
    },
    {
      img: {
        name: "volunteers",
        alt: "Volunteers helping sort clothing donations.",
      },
      heading: "Help Give Back",
      paragraphs: [
        "Volunteers are needed weekday evenings to help sort and fold clothing donations at King's Closet.",
      ],
    },
  ],
}

export default GetInvolved
