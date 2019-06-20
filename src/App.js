import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDisplay: ''
    }
  }
  clearAll() {
    this.setState({toDisplay: '0'});
  }
  
  setValue() {
    var value = eval(this.state.toDisplay);
    this.setState({toDisplay: value});
  }
  
  setDisplay(item) {
    if(this.state.toDisplay === '' && (item === '*' || item === '+' || item === '-'))
      return;
    else {
      var onDisplay =  this.state.toDisplay + item;
      this.setState({toDisplay: onDisplay});
    }
  }
  
  render() {
    const container = {
      width: '100%',
      height: '100%'
    }
    
    const indCont = {
      width: '100%',
      height: '25%',
      display: 'flex'
    }
    
    const spanStyle = {
      display: 'inline-flex',
      width: '25%',
      textAlign: 'center',
      border: '1px solid darkgrey',
      boxSizing: 'border-box',
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20pt'
    }
    
    const resultStyle = {
      width: '100%',
      height: '30%',
      backgroundColor: '#454545',
      color: 'white',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }
    
    const lowerCont = {
      position: 'fixed',
      bottom: '0',
      width: '100%',
      height: '70%'
    }
    
    const zeroStyle = {
      display: 'inline-flex',
      width: '50%',
      height: '100%',
      border: '1px solid darkgrey',
      boxSizing: 'border-box',
      backgroundColor: '#e0e0e0',
      alignItems: 'center',
      fontSize: '20pt',
      paddingLeft: '12%'
    }
    
    const operatorStyle = {
      backgroundColor: '#ff8f00',
      display: 'inline-flex',
      width: '25%',
      textAlign: 'center',
      border: '1px solid darkgrey',
      boxSizing: 'border-box',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20pt',
      color: 'white'
    }
    
    const result = {
      display: 'inline-block',
      fontSize: '30pt',
      paddingRight: '12%'
    }
    
    return(
      <div style={container}>
        <div style={resultStyle}>
          <span style={result}>{this.state.toDisplay}</span>
        </div>
        <div style={lowerCont}>
          <div style={indCont}>
            <span style={spanStyle} onClick={() => this.setDisplay('7')}>7</span>
            <span style={spanStyle} onClick={() => this.setDisplay('8')}>8</span>
            <span style={spanStyle} onClick={() => this.setDisplay('9')}>9</span>
            <span style={operatorStyle} onClick={() => this.setDisplay('*')}>x</span>
          </div>
          <div style={indCont}>
            <span style={spanStyle} onClick={() => this.setDisplay('4')}>4</span>
            <span style={spanStyle} onClick={() => this.setDisplay('5')}>5</span>
            <span style={spanStyle} onClick={() => this.setDisplay('6')}>6</span>
            <span style={operatorStyle} onClick={() => this.setDisplay('-')}>-</span>
          </div>
          <div style={indCont}>
            <span style={spanStyle} onClick={() => this.setDisplay('1')}>1</span>
            <span style={spanStyle} onClick={() => this.setDisplay('2')}>2</span>
            <span style={spanStyle} onClick={() => this.setDisplay('3')}>3</span>
            <span style={operatorStyle} onClick={() => this.setDisplay('+')}>+</span>
          </div>
          <div style={indCont}>
            <span onClick={() => this.setDisplay('0')} style={zeroStyle}>0</span>
            <span onClick={() => this.clearAll()} style={spanStyle}>AC</span>
            <span onClick={() => this.setValue()} style={operatorStyle}>=</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
