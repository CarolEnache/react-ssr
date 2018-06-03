import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Secret from './Secret';
import Header from './Header';


class Layout extends Component {
    constructor(){
        super();
        this.state = {
            title: 'Welcome to React SSR!'
        };
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Header />
                <Switch>
                    <Route path='/' exact componet={ Home } />
                    <Route path='/about' exact componet={ About } />
                    <Route path='/contact' exact componet={ Contact } />
                    <Route path='./secret' exact component={ Secret }/>
                </Switch>
            </div>
        );
    }
};

export default Layout;