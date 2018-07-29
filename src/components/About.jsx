import React from 'react'

export default ({title, color, text}) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className={`fa fa-user fa-fw w3-margin-right w3-xxlarge w3-text-${color}`}></i>{title}</h2>
            <p>{text}</p>
            <hr/>
    </div>
  )
}
