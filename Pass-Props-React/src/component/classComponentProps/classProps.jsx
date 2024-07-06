import React, { Component } from 'react'

class ClassProps extends Component {
    // rconst
  render() {
    const {
        course
    } = this.props
    // Using destructuring to get the props value
    return (
      <div>
        <h1> I am {this.props.name} Now I am Learing {course} Course</h1>
      </div>
    )
  }
}

export default ClassProps;
