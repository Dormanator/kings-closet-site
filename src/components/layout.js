import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Logo from "../images/logo.svg"

const Layout = ({ children, socialMediaLinkConfig }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "social_media" } }) {
        edges {
          node {
            childImageSharp {
              fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  // Add each logo's image data, returned from the query, to the corresponding config
  for (let cfg of socialMediaLinkConfig) {
    data.allFile.edges.forEach(img => {
      let imgData = img.node.childImageSharp.fixed

      if (imgData.src.toLowerCase().includes(cfg.imgName.toLowerCase())) {
        cfg.img = imgData
      }
    })
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="'King's Closet' in front of a gold crown on a black hanger"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
              <Nav.Link as={AnchorLink} to="/#home">
                Home
              </Nav.Link>
              <Nav.Link as={AnchorLink} to="/#about">
                About
              </Nav.Link>
              <Nav.Link as={AnchorLink} to="/#get-involved">
                Get Involved
              </Nav.Link>
              <Nav.Link as={AnchorLink} to="/#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <footer className="footer bg-light text-dark pb-4 pt-5 mt-0">
        <Container>
          <Row>
            <Col md="6" className="text-center text-md-left">
              {Object.values(socialMediaLinkConfig).map(data => (
                <a
                  key={data.link}
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img fixed={data.img} alt={data.alt} />
                </a>
              ))}
            </Col>
            <Col className="text-center text-md-right">
              <small>
                <span>King's Closet &copy; {new Date().getFullYear()}</span>
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  socialMediaLinkConfig: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      imgName: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
}

Layout.defaultProps = {
  children: <div>Body</div>,
  socialMediaLinkConfig: [
    {
      link: "https://www.facebook.com/KingsClosetDFW/",
      imgName: "facebook",
      alt: "Facebook Logo",
    },
    {
      link: "https://www.instagram.com/kingsclosetdfw/",
      imgName: "instagram",
      alt: "Instagram Logo",
    },
    {
      link: "https://www.linkedin.com/in/king-s-closet-083094154/",
      imgName: "linkedin",
      alt: "LinkedIn Logo",
    },
  ],
}

export default Layout
