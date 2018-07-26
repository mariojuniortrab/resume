import React from 'react'

export default ({name,profileTextColor,picturePath}) => {
  return (
    <div>
       <div className="w3-display-container">
        <img src={picturePath} style={{width:'100%'}} alt="Avatar" />
            <div className={`w3-display-bottomleft w3-container w3-text-${profileTextColor}`}>
                <h2>{name}</h2>
            </div>
        </div>
    </div>
  )
}
