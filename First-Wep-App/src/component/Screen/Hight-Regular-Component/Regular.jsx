// rce
import React, { Component } from 'react';

export class RegularComponent extends Component {
  render() {
    return (
      <div>
        <h1> I am Regular Component. I am {this.props.name} </h1>
      </div>
    );
  }
}

export default RegularComponent;
