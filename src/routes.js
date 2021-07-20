import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositorios from './Repositorios';
import Home from './Home';

export default function routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositorios' component={Repositorios} />
            </Switch>
        </BrowserRouter>
    );
}