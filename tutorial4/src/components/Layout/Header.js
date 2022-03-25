import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar>
        <Container>
        
  <Navbar bg="dark" variant="dark col-12" >
    <Container>
    <Navbar.Brand ><Link className="nav-link text-light" to="/">Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link text-light" to="/aboutme">About Me</Link>
      <Link className="nav-link text-light"  to="/portfolio">Portfolio</Link>
      <Link className="nav-link text-light"  to="/contact">Contact</Link>
      <Link className="nav-link text-light"  to="/blog">Blog</Link>
    </Nav>
   
    </Container>
  </Navbar>
  
  

  
  

        </Container>
    </Navbar>
  )
}
