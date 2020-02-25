import React from 'react';
import Navigator from './Navigator';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Motivation from './Motivation';
import Team from './Team';
import Meet from './Meet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/css/argon-design-system-react.min.css";
import "../assets/css/argon-design-system-react.css.map";

const App = () => {
    return (
        <BrowserRouter>
            <Navigator />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/motivation">
                    <Motivation />
                </Route>
                <Route path="/team">
                    <Team />
                </Route>
                <Route path="/meet">
                    <Meet />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
};

export default App;