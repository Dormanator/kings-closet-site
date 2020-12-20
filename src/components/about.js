import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSocks,
  faUsers,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons"

const About = ({ title, paragraphs, practices }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "leadership.png" }) {
        childImageSharp {
          fluid(maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const iconMap = {
    faSocks: faSocks,
    faUsers: faUsers,
    faHandHoldingHeart: faHandHoldingHeart,
  }

  return (
    <div id="about" className="bg-light">
      <Container>
        <Row className="pt-5">
          <Col lg="6">
            <h1 className="display-4 border-bottom border-primary mb-3">
              {title}
            </h1>
            {paragraphs.map(p => (
              <p className="lead">{p}</p>
            ))}
          </Col>
          <Col lg="6">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="King's Closet leadership with others"
              className="rounded"
            />
          </Col>
        </Row>
      </Container>
      <div className="bg-primary py-5 mt-5">
        <Container>
          <Row>
            {practices.map(practice => (
              <Col md="4" className="text-center mt-3 mt-md-0">
                <div className="h-100 border border-white rounded p-4">
                  <FontAwesomeIcon
                    icon={iconMap[practice.iconName]}
                    size="4x"
                    className="text-white mb-4"
                  />
                  <h2 className="text-secondary font-weight-light mb-3">
                    {practice.title}
                  </h2>
                  <p className="text-white">{practice.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

About.defaultProps = {
  title: "About",
  paragraphs: [
    "King’s Closet is a not for profit organization providing clothing to those in need and serving the homeless of Dallas.",
  ],
  practices: [
    {
      title: "Donations",
      description:
        "We accept monetary and clothing donations so we can serve our community.",
      iconName: "faSocks",
    },
    {
      title: "Volunteers",
      description:
        "Volunteers from across the DFW area come together weekly to help us sort the clothes we receive.",
      iconName: "faUsers",
    },
    {
      title: "Giving",
      description:
        "We distribute clothing to the homeless of Dallas on the 1st through 4th weekends of every month.",
      iconName: "faHandHoldingHeart",
    },
  ],
}

export default About
