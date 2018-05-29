import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class Layout extends Component {
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
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Contact'>Contact</Link>                
                </div>
                <Switch>
                    <Route path='/' exact componet={ Home } />
                    <Route path='/about' exact componet={ About } />
                    <Route path='/contact' exact componet={ Contact } />
                </Switch>
            </div>
        );
    }
};