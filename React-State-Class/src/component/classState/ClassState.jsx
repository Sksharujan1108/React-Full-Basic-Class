import React, { Component } from 'react'

 class ClassState extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    name = {
        fontStyle: 'bold',
        color: 'red'
    }
  render() {
    return (
      <div>
        <h1> Register Form </h1>
        <form>
            <table>
                {/* name Field */}
                <tr>
                    <td> 
                        <label style = {this.name}> Name : </label>
                    </td>
                    <td>
                        <input
                          type = 'text'
                          name = ''
                          placeholder = 'Enter Your Name'
                          value = {''}
                          onChange = {''}
                        />
                    </td>
                </tr>

                <br/>
                {/* Address Field */}
                <tr>
                    <td>
                        <label style = {this.name}> Address: </label>
                    </td>

                    <td>
                        <input
                          type = 'text'
                          name = ''
                          placeholder = 'Enter Your Address'
                          value = {''}
                          onChange = {''}
                        />
                    </td>
                </tr>
            </table>
        </form>
      </div>
    )
  }
}

export default ClassState;
