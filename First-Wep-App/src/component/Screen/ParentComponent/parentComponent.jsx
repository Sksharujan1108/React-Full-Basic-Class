// rce
import React, { Component } from 'react';
import RegularComponent from '../Hight-Regular-Component/Regular';
import PureCom from '../High-Pure-Component/pure';


class ParentComponent extends Component {
  // rconst
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sk_Sarujan'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Sk_Sarujan'
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1> I am a Parent Component </h1>
        {/* Regular Com */}
        <RegularComponent name={this.state.name} />
        {/* Pure Com */}
        <PureCom name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
