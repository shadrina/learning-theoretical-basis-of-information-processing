import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Lab1 from './Lab1'
import Lab2 from './Lab2'
import Lab3 from './Lab3'
import Header from './Header'
import InfoPanel from './InfoPanel'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <Switch>
                                <Route exact path='/' component={Lab1} />
                                <Route path='/lab1' component={Lab1} />
                                <Route path='/lab2' component={Lab2} />
                                <Route path='/lab3' component={Lab3} />
                            </Switch>
                        </Col>
                        <Col xs={4} md={4}>
                            <InfoPanel />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}