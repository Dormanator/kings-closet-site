import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/logo.svg"

const Layout = ({ children }) => (
  <>
    <Navbar collapseOnSelect expand="md" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {children}
  </>
)

export default Layout
