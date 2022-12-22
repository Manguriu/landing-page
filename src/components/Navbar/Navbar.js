/* eslint-disable jsx-a11y/anchor-is-valid */
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ContactUs from "../../home/ContactUs";
import SignInComponent from "./Signin";
import SignUpComponent from "./SignUp";

function NavbarComponent() {
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  return (
    <div className="box-shadow">
      <Container>
        <Navbar expand="sm">
          <Navbar.Brand href="/">Writers Arena</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <div>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-outline-primary "
                  onClick={handleShow}
                >
                  ContactUs
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton> Contact Us </Modal.Header>
                  <Modal.Body>
                    <p> {<ContactUs />}</p>
                  </Modal.Body>
                </Modal>
              </li>
              <li>
                <SignInComponent />
              </li>
              <li>
                <SignUpComponent />
              </li>
            </ul>
          </div>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarComponent;
