import React from 'react'

export default ({color, social}) => {
  return (
    <div>
        <footer className={`w3-container w3-${color} w3-center w3-margin-top`}>
            <p>
            {social.map((value,index) => (
              <a key={index} href={value.url} target="_blank" rel="noopener noreferrer" className="w3-margin-right"><i className={`fa ${value.icon} w3-hover-opacity`}></i></a>
            ))}
            </p>
        </footer>
    </div>
  )
}

