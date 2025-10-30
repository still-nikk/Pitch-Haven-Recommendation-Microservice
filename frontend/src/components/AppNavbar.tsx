import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../styles/NavbarStyles.css"; // We will create this file next
import "../../public/pitch-haven-logo.png";

// Define the props it will accept
type NavbarProps = {
  currentUser: any; // Using 'any' as in your NoteList
  onLogout: () => void;
};

const appLogo = "/logo.png"; // Assuming this is in your /public folder

export function AppNavbar({ currentUser, onLogout }: NavbarProps) {
  const isLoggedIn = !!currentUser;

  // Use metadata for name, and create a fallback avatar
  const userName = currentUser?.user_metadata?.user_name || "User";
  const userAvatar =
    currentUser?.user_metadata?.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      userName
    )}&background=7F35FF&color=fff`;

  return (
    // 'sticky="top"' makes it stay at the top
    // 'expand="lg"' makes it responsive
    <Navbar sticky="top" expand="lg" className="app-navbar">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src="/pitch-haven-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-lg me-2"
            alt="Pitch-Haven Logo"
          />
          <span>
            Pitch-<span className="text-primary">Haven</span>
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {isLoggedIn ? (
              // --- If User is Logged In ---
              <>
                <LinkContainer to="/new">
                  <Nav.Link className="navbar-link-text">
                    Create Project
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/interests">
                  <Nav.Link className="navbar-link-text">
                    Update Interests
                  </Nav.Link>
                </LinkContainer>

                {/* User Avatar & Dropdown Menu */}
                <NavDropdown
                  title={
                    <img
                      src={userAvatar}
                      alt={userName}
                      className="navbar-avatar"
                    />
                  }
                  id="basic-nav-dropdown"
                  align="end"
                  className="navbar-dropdown-menu"
                >
                  <NavDropdown.Header>
                    Signed in as <strong>{userName}</strong>
                  </NavDropdown.Header>
                  <NavDropdown.Divider />

                  {/* Profile Link (assumes user ID is on currentUser.id) */}
                  <LinkContainer to={`/user/${currentUser.id}`}>
                    <NavDropdown.Item>My Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout} className="text-danger">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              // --- If User is Logged Out ---
              <LinkContainer to="/login">
                <Button variant="primary" className="navbar-login-btn">
                  Login
                </Button>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
