import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Grid  from 'react-bootstrap/lib/Grid'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/es/Nav'
import NavItem from 'react-bootstrap/es/NavItem'

import '../../static/styles/bootstrap.css'


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='/'>Лабораторные работы по ТООИ</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
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
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}