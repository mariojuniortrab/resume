import React from 'react'
import ProfileImage from './ProfileImage'
import CapacitiesBlock from './CapacitiesBlock';
import ProfileData from './ProfileData';
import Skills from './Skills';
import Languages from './Languages';

export default ({profileImage, profileData, skills, languages}) => {

  return (
    <div className="w3-white w3-text-grey w3-card-4" >
        <ProfileImage {...profileImage}/>
        <CapacitiesBlock>
            <ProfileData {...profileData}/>
            <hr/>
            <Skills {...skills}/>
            <Languages {...languages} />
        </CapacitiesBlock>
       
        <br/>
    </div>
  )
}
