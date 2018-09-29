import React from 'react'

import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/es/Nav'
import NavItem from 'react-bootstrap/es/NavItem'

import '../../static/styles/bootstrap.css'


export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='/'>Лабораторные работы по ТООИ</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav bsStyle="tabs">
                    <NavItem eventKey={1} href="/lab1">
                        Первая
                    </NavItem>
                    <NavItem eventKey={2} href="/lab2">
                        Вторая
                    </NavItem>
                    <NavItem eventKey={3} href="/lab3">
                        Третья
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}