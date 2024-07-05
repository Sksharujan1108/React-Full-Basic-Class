// rcc

import React, { Component } from 'react'

class ClickComponent extends React.Component {
    // rcon
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    updateClick = () => {
        this.setState( { count: this.state.count + 1 });
    }
    
  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          onClick = {this.updateClick}
        >
            Click {`${count}`} Time
        </button>
      </div>
    )
  }
}

export default ClickComponent;
