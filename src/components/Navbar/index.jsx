import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function Header() {
  
  return (
    <>
      <Navbar expand="lg" variant="dark" style={{ padding: "10px",margin:"5px" }}>
        <Container>
          <Navbar.Brand href="#profile"  >
            <span className="border-1 border-red-400 text-red-400 p-2 w-28 h-28 rounded-full text-2xl mt-2">VJ</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "20px" }}>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              <Nav.Link href="#certification">Certifications</Nav.Link>
              <Nav.Link href="#proj">Projects</Nav.Link>
              <Nav.Link href="#achievement">Achievements</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
