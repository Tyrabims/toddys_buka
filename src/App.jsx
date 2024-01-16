import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link path="/" className="navbar-brand text-success fw-semibold">
              {" "}
              Toddys Restarant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="active text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="/menu" className="text-uppercase">
                Menu
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                About
              </Nav.Link>
              <Nav.Link href="/contact" className="text-uppercase">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
      <footer className="bg-body-tertiary">
        <p className="p-3 m-0 text-center">copyright @ made by Tyra</p>
      </footer>
    </>
  );
}

export default App;
