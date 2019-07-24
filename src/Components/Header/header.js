import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';

function handleLogo(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    });
}
function handlePelis(){
    window.scroll({
        top: 30, 
        left: 0, 
        behavior: 'smooth'
    });
}
function handleSagas(){
    window.scroll({
        top: 700, 
        left: 0, 
        behavior: 'smooth'
    });
}
function handleSeries(){
    window.scroll({
        top: 1380, 
        left: 0, 
        behavior: 'smooth'
    });
}

function Header() {
    return(
        <Container className="header">
            <Row>
                <Col md={{span:4, offset:1}} sm={12} className="logo" onClick={() => handleLogo()}>
                    Movies Store
                </Col>
            </Row>
            <Row>
                <Navbar expand="lg" className="complete">
                    <Navbar.Collapse className="complete" id="basic-navbar-nav">
                        <Nav className="mr-auto complete">
                            <Nav.Link onClick={() => handlePelis()} className="col-md-2 offset-md-2 text-center">Peliculas</Nav.Link>
                            <Nav.Link onClick={() => handleSagas()} className="col-md-2 text-center">Sagas</Nav.Link>
                            <Nav.Link onClick={() => handleSeries()} className="col-md-2 text-center">Series</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Header;