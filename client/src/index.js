import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Lab1 from './components/Lab1'
import Lab2 from './components/Lab2'
import Lab3 from './components/Lab3'
import Header from "./components/Header";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Lab1} />
                <Route path='/lab1' component={Lab1} />
                <Route path='/lab2' component={Lab2} />
                <Route path='/lab3' component={Lab3} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
