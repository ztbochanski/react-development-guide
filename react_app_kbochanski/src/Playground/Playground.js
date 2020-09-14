/* Using this to play with ideas and solidify a basic understanding of React
Re-watching a bunch of 
[React basics videos](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8090842#overview)
and reading through https://reactjs.org/docs/thinking-in-react.html
// Good thoughts on composition vs inheritance (https://reactjs.org/docs/composition-vs-inheritance.html)
*/ 

//The Playground Component is the parent to whatever other components are being worked with
// Tips: Use cc snippet for class component, imrc for the import

import React, { Component } from 'react';

import Variable from './Variable'

class  Playground extends Component {

    render() { 
        return (
            <div>
            <br/>
            <hr/>
            <p style={{color:'red'}}>Some examples below from the Playground...</p>
            <Variable/>
            </div>
        );
    }
}
 
export default Playground;
