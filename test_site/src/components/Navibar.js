import { useState } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Button,
  Container,
  Modal,
  Form,
} from "react-bootstrap";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

const NaviBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>React-Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <NavLink>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                    Users
                  </Link>
                </NavLink>
                <NavLink>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    About
                  </Link>
                </NavLink>
              </Nav>
              <Nav className={s.reg_buttons}>
                <Button
                  variant="btn btn-outline-secondary"
                  className="me-md-2"
                  onClick={handleShow}
                >
                  Log In
                </Button>
                <Button
                  variant="btn btn-outline-secondary"
                  className="me-md-2"
                  onClick={handleShow}
                >
                  Sign out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="fromBasicPCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NaviBar;
