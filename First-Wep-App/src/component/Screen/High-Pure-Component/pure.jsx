// rpce
import React, { PureComponent } from 'react';

class PureCom extends PureComponent {
  render() {
    return (
      <div>
        <h1> Hi My Name is {this.props.name}. I am Pure Component </h1>
      </div>
    );
  }
}

export default PureCom;
