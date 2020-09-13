/*
An example of using state from https://reactjs.org/docs/lifting-state-up.html
In addition to examples of using state from a parent and propagating that to all
children, this component also has examples of handling events (eg. onChange with
arrow functions)
*/

import React, { Component } from 'react';

import Calculator from './Calculator'

class State extends Component {

    render() { 
        return (
            <div>
            <p> An example of working with state can be found 
             <a href='https://reactjs.org/docs/lifting-state-up.html'> here </a>
            </p>
            <Calculator/>
            </div>

        );
    }
}
 
export default State;