import React from 'react'

export default ({title, color, projects}) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16"><i className={`fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-${color}`}></i>{title}</h2>
        {projects.map((value, index)=>(
          <div key={index} style={{width:'100%'}}>
            <div className="w3-card-4" style={{width:'100%'}}>
              <img src={value.picturePath} alt={value.title} style={{width:'100%'}}/>
              <div className="w3-container">
                <a href={value.url}><h4><b>{value.title}</b></h4></a>
                <p>{value.text}</p>
              </div>
            </div>
            <br/>
          </div>
        ))}
    </div>
  )
}
