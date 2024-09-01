
import React from 'react'
import TeamPhoto from '../../../assets/images/team-photo.jpeg';
const impressionBlock = () => {
  return (
    <div className="impression-block">
    <div className="team-photo-block">
        <img className="team-photo" src={TeamPhoto} alt="Team Photo" />
    </div>
    <div>
        <p className="what-is-aeropower">
            Aeropower is a project team of the IEEE which competes in the DoE Collegiate Wind Competition
        </p>
    </div>
</div>
  )
}

export default impressionBlock
