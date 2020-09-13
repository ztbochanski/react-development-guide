/* 
An example from https://reactjs.org/docs/composition-vs-inheritance.html

At Facebook, we use React in thousands of components, and we haven’t found any use cases 
where we would recommend creating component inheritance hierarchies.
*/

import React, { Component } from 'react';

import FancyBorder from './FancyBorder'

class Composition extends Component {
    render() { 
        return (
            
            <FancyBorder>
             <p>A child component passed into FancyBorder</p>
            </FancyBorder>
        );
    }
}
 
export default Composition;