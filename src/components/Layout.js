import React, { Component } from 'react';

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
            </div>
        );
    }
};