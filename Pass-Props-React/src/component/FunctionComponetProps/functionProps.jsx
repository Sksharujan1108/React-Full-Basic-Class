import React from 'react'

const FunctionProps = (props) => {
    const {
        first_name,
        developer,
        year,
        course_name,
    } = props

  return (
    <div>
        <h1> I am {first_name} </h1>
        <h1> I have {developer} {year} year Expression in the Field </h1>
        <p> Now I am Learing {course_name} Course</p>
    </div>
  )
}

export default FunctionProps;
