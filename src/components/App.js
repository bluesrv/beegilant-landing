import React, { useEffect } from 'react';
import Navigator from './Navigator';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Motivation from './Motivation';
import Team from './Team';
import Meet from './Meet';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AOS from 'aos';

import 'aos/dist/aos.css';
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../assets/scss/argon-design-system-react.scss";
import "../assets/scss/beegilant/custom.scss"

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='background'>
            <HashRouter>
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
            </HashRouter>
        </div>
    )
};

export default App;