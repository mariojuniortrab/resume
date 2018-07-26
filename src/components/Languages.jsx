import React from 'react'
import LanguageBar from './LanguageBar';

export default ({color, text, languageBar}) => {
  return (
    <div>
        <p className="w3-large w3-text-theme"><b><i className={`fa fa-globe fa-fw w3-margin-right w3-text-${color}`}></i>{text}</b></p>
        {languageBar.map((value, index) => (
          <LanguageBar title={value.title} color={value.color} key={index}>{value.value}</LanguageBar>
        ))}
        <br/>
    </div>
  )
}
