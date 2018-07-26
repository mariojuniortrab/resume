import React from 'react'
import SkillBar from './SkillBar';

export default ({text, color, skillBar}) => {
  return (
    <div>
        <p className="w3-large"><b><i className={`fa fa-asterisk fa-fw w3-margin-right w3-text-${color}`}></i>{text}</b></p>
        {skillBar.map((value, index) => (
             <SkillBar title={value.title} key={index} color={value.color}>{value.value}</SkillBar>
        ))}
        <br/>
    </div>
  )
}
