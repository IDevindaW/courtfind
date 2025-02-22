import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutUser } from "../services/authService";

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    };

    const fullStyle = {
        backgroundColor: "#0b162c",
        padding: "0px 150px 0px 150px ",
    };

    const navbarStyle = {
        backgroundColor: "#0b162c",
        padding: "0px 10px 0px 10px ",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    };

    const navLinkStyle = {
        color: "#fff",
        fontSize: "16px",
        textDecoration: "none",
        margin: "0 15px",
    };

    return (
        <>
            <div style={fullStyle}>
            {/* Main Navbar */}
            <Navbar expand="lg" style={navbarStyle} variant="dark">
                <Container>
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/">
                        <img src="/assets/logo.png" alt="CourtFind Logo" style={{ height: "90px" }} />
                    </Navbar.Brand>

                    {/* Navbar Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/contact" style={navLinkStyle}>
                                Contact us
                            </Nav.Link>
                        </Nav>
                        <Nav>
                        {isAuthenticated() ? (
                            <>
                                <Nav.Link as={Link} to="/dashboard" style={{ padding: "8px 30px 0px 10px" }}>Dashboard</Nav.Link>
                                <Button variant="danger" style={{ padding: "5px 10px 7px 10px" }}onClick={handleLogout}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/signup" style={navLinkStyle}>
                                Sign up
                                </Nav.Link>
                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="primary"
                                    style={{
                                        backgroundColor: "#007bff",
                                        border: "none",
                                        padding: "6px 15px",
                                    }}
                            >
                                    Log in
                                </Button>
                            </>
                        )}
                            
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>

            <Navbar expand="lg" style={navbarStyle} variant="dark">
                <Container>
                <Nav>
                    <Nav.Link as={Link} to="/explore" style={navLinkStyle}>
                                Explore Now
                    </Nav.Link>
                </Nav>
                </Container>
                
            </Navbar>

            </div>
        </>
    );
};

export default NavigationBar;
