import React, { Component } from 'react';

class Variable extends Component {

    state = { value:'hey',
              anothervalue:'hey again'
            }

    combined = this.state.value + ' and ' + this.state.anothervalue

    render() { 
        const combined = this.combined
        /*
        Note how combined was defined as class attribute. I could simply define
        it in the render method then don't have to get it from this
        */
        return (
            <div>
                <p>{combined}</p>
            </div>
        );
    }
}
 
export default Variable;