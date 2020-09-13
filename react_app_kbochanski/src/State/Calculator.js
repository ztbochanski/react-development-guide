import React, { Component } from 'react';

import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

// Example here of functions used in component. Notice the functional function tryConvert() (function in to vector out). See https://adv-r.hadley.nz/fp.html
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) { 
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return 'Not a number';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends Component {
    // constructor(props){
    //     super(props);
        // this.handleCelsiusChange = this.handleCelsiusChange.bind(this); //See handling events for not using bind; https://reactjs.org/docs/handling-events.html
        // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    //     this.state = {temperature:'',scale:'c'}
    // }

    // handleCelsiusChange(temperature) {
    //     this.setState({scale: 'c', temperature});
    //   }
    
    //   handleFahrenheitChange(temperature) {
    //     this.setState({scale: 'f', temperature});
    //   }

    /*
    In order to not have to write out the CONSTRUCTOR, I used arrow functions to handle state
    so I would NOT have to BIND handler function to component instance. Also that let me get to
    use just the 'state' object instead of explicitly constructing 'this.state'
    */

    state = { 
        temperature:'',
        scale:'c'
    }
    handleCelsiusChange = (temperature) => {
        this.setState({scale: 'c', temperature});
      }
    
    handleFahrenheitChange = (temperature) => {
        this.setState({scale: 'f', temperature});
      }

      render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
        return (
          <div>
            <p style={{color:'red'}}>Some examples below from State...</p>
            <TemperatureInput
              scale="c"
              temperature={celsius}
              onTempChange={this.handleCelsiusChange}/>
            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTempChange={this.handleFahrenheitChange} />
            <BoilingVerdict
              celsius={parseFloat(celsius)} />
          </div>
        );
      }
    }

 
export default Calculator;