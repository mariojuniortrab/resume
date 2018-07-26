import React from 'react'
import 'w3-css'

export default ({children}) => {
  return (
    <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
      <div className="w3-row-padding">
          {children}
      </div>
    </div>
  )
}
