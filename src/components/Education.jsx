import React from 'react'

export default ({title, color, courses}) => {
  return (
    <div className="w3-container w3-card w3-white  w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className={`fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-${color}`}></i>{title}</h2>
        {courses.map((value, index)=>(
          <div className="w3-container" key={index}>
            <h5 className="w3-opacity"><b>{value.name} / {value.institution}</b></h5>
            <h6 className={`w3-text-${value.color}`}><i className="fa fa-calendar fa-fw w3-margin-right"></i>{value.begin} - {value.end}</h6>
            {value.description ? <p>{value.description}</p> : ''}
            <hr/>
          </div>
        ))}        
    </div>
  )
}
