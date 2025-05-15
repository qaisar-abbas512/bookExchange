import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import NotificationDropdown from "../notification/Notification";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary py-4 header"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-4 fw-bold me-5">
          <img className="webLogo" src="/images/web-logo.svg" alt="web logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-4">
            <Nav.Link href="/" className="navLinks">
              Home
            </Nav.Link>
            <Nav.Link href="/chat" className="navLinks">
              Chats
            </Nav.Link>
            <Nav.Link href="/wishlist" className="navLinks">
              Wishlist
            </Nav.Link>
            <Nav.Link href="/book-management" className="navLinks">
              Manage Books
            </Nav.Link>

            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav className="gap-2 d-flex align-items-center">
            <NotificationDropdown />
            <Link to="/sign-in" className="btnSignin">
              <img src="/images/user-white-icon.svg" alt="user" /> Sign in
            </Link>

            <Dropdown className="hdrProfile">
              <Dropdown.Toggle className="btnHdrProfile d-flex align-items-center gap-2">
                <img src="/images/Avatars.png" alt="user profile" />{" "}
                <strong>UserName</strong>{" "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="profileDrp d-flex align-items-center gap-2 p-3">
                  <img src="/images/Avatars.png" alt="user profile" />{" "}
                  <div className="d-flex align-items-start flex-column">
                    <strong>UserName</strong>{" "}
                    <span className="userEmail">davidlouis@gmail.com</span>
                  </div>
                </div>
                <hr className="drpBr" />
                <Dropdown.Item
                  href="#/action-2"
                  className="px-3 py-3 d-flex align-items-center gap-2"
                >
                  <img src="/images/profile-user.svg" alt="user" />
                  Profile{" "}
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  className="px-3 py-2 text-danger d-flex align-items-center gap-2"
                >
                  <img src="/images/signout-icon.svg" alt="signout" /> Sign in
                  Signout{" "}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
