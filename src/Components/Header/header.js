import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function Header() {
    return(
        <Container>
            <Row>
                <Col xs={12} md={8}>xs=12 md=8</Col>
                <Col xs={12} md={4}>xs=12 md=4</Col>
            </Row>
        </Container>
    )
}

export default Header;