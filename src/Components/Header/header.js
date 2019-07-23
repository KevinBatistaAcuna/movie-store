import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';

function Header() {
    return(
        <Container fluid={true} className="header">
            <Row>
                <Col md={{span:4, offset:1}} sm={12} className="logo">
                    Movies Store
                </Col>
            </Row>
            <Row>
                <Navbar expand="lg" className="complete">
                    <Navbar.Collapse className="complete" id="basic-navbar-nav">
                        <Nav className="mr-auto complete">
                            <Nav.Link href="#peliculas" className="col-md-2 offset-md-2 text-center">Peliculas</Nav.Link>
                            <Nav.Link href="#sagas" className="col-md-2 text-center">Sagas</Nav.Link>
                            <Nav.Link href="#series" className="col-md-2 text-center">Series</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div class="cart-icon">
                    <img src="./cart.png" alt="cart icon" class="cartImg"/>
                    <span>Your Cart</span>
                    <div class="qty">3</div>
                </div>
            </Row>
        </Container>
    )
}

export default Header;