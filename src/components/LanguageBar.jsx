import React from 'react'

export default ({title, color, children}) => {
  return (
    <div>
      <p>{title}</p>
        <div className="w3-light-grey w3-round-xlarge">
            <div className={`w3-round-xlarge w3-${color}`} style={{width: children + '%', height:'24px'}} ></div>
        </div>
    </div>
  )
}
