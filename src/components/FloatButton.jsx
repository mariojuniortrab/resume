import React, { Component } from 'react'

export default class FloatButton extends Component {
  render() {
    const {language, handleClick} = this.props; 
    
    return (
      <div>
        {language === 'PT' ? <button className="w3-button w3-xlarge w3-circle w3-deep-orange w3-card-4 float" onClick={handleClick} >EN</button> : <button className="w3-button w3-xlarge w3-circle w3-teal w3-card-4 float" onClick={handleClick} >PT</button> }
      </div>
    )
  }
}


