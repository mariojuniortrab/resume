import React from 'react'

export default ({title, color, children}) => {
  return (
    <div>
      <p>{title}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
            <div className={`w3-container w3-center w3-round-xlarge w3-${color}`} style={{width: children + '%'}}>{children}%</div>
        </div>
    </div>
  )
}
