import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Sensör</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/new">Yeni Ekle</Nav.Link>
            <Nav.Link href="/newMap">Harita Ekle</Nav.Link>
            <Nav.Link href="/sensors">Sensör Özet</Nav.Link>
            <Nav.Link href="/sensors/logs">Sensör Detay Ekranı</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;