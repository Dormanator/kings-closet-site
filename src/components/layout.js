import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"
import Logo from "../images/logo.svg"

const Layout = ({ children }) => {
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

  let socialMediaLinkConfig = {
    facebook: {
      link: "https://www.facebook.com/KingsClosetDFW/",
      alt: "Facebook Logo",
    },
    instagram: {
      link: "https://www.instagram.com/kingsclosetdfw/",
      alt: "Instagram Logo",
    },
    linkedin: {
      link: "https://www.linkedin.com/in/king-s-closet-083094154/",
      alt: "LinkedIn Logo",
    },
  }

  // Add the logo image corresponding to each social media link to the link config object
  for (let socialMediaName of Object.keys(socialMediaLinkConfig)) {
    data.allFile.edges.forEach(img => {
      let imgData = img.node.childImageSharp.fixed

      if (imgData.src.toLowerCase().includes(socialMediaName.toLowerCase())) {
        socialMediaLinkConfig[socialMediaName].img = imgData
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
              alt="King's Closet copy in from of a gold crown on a black hanger"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto font-weight-bold">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#volunteer">Volunteer</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <footer className="footer bg-light text-dark pb-3 pt-4 mt-5">
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

export default Layout
