import React, { PureComponent } from 'react'
import './styles.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";



class NewStateComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        Subscribe: false,
        message: this.getMessage(false)
      }
    }

    getMessage = (Subscribe) => {
        return (
            <div>
                {Subscribe ?
                   (
                      <div className = 'show-message '>
                        <h2> Thank You For Subscribing </h2>
                        <IoNotificationsOffOutline 
                           className="notification" 
                           size={25} 
                        />
                      </div>
                   ) : 
                    (
                        <div className = 'show-message'>
                            <h2> Hi This is State </h2>
                            <IoMdNotificationsOutline 
                               className="notification" 
                               size={25} 
                            />
                        </div>
                    )
                }
            </div>
        )
    }

    ButtonChange = () => {
       this.setState((prevState) => {
        const newSubscribeState = !prevState.Subscribe
        return {
            Subscribe: newSubscribeState,
            message: this.getMessage(newSubscribeState)
        }
       })
    }
    
  render() {
    return (
      <div>
        <h1 className = 'header'> New State Component </h1>
        <p>{this.state.message}</p>

        <button
          className = 'btn'
          onClick = {this.ButtonChange}
        >
          {this.state.Subscribe 
             ? 'Subscribe'
             : 'UnSubscribe'
          }
        </button>
      </div>
    )
  }
}

export default NewStateComponent;
