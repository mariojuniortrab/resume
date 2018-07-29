import React from 'react'

export default ({title, color, jobs}) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className={`fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-${color}`}></i>{title}</h2>
        {jobs.map((value, index)=>(
          <div className="w3-container" key={index}>
            <h5 className="w3-opacity"><b>{value.ocupation} / {value.company}</b></h5>
            <h6 className={`w3-text-${value.color}`}><i className="fa fa-calendar fa-fw w3-margin-right"></i>{value.begin} - { value.current ? <span className={`w3-tag w3-${value.color} w3-round`}>{value.currentText}</span> : value.end}</h6>
            <p>{value.description}</p>
            <hr/>
          </div>
        ))}
    </div>
  )
}
