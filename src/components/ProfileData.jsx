import React from 'react'

export default ({color, residence, email, profession, tel}) => {
  return (
    <div>
        <p><i className={`fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-${color}`}></i>{profession}</p>
        <p><i className={`fa fa-home fa-fw w3-margin-right w3-large w3-text-${color}`}></i>{residence}</p>
        <p><i className={`fa fa-envelope fa-fw w3-margin-right w3-large w3-text-${color}`}></i>{email}</p>
        <p><i className={`fa fa-phone fa-fw w3-margin-right w3-large w3-text-${color}`}></i>{tel}</p>
    </div>
  )
}
