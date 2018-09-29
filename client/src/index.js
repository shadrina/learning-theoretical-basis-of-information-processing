import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import Lab1 from './components/Lab1'
import Lab2 from './components/Lab2'
import Lab3 from './components/Lab3'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/lab1' component={Lab1} />
            <Route path='/lab2' component={Lab2} />
            <Route path='/lab3' component={Lab3} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
