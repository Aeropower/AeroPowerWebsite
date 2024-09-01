import React from 'react'
import Dog1 from "../../../assets/images/dog.jpg";
import Dog2 from "../../../assets/images/dog2.jpg";
const missionVisionBlock = () => {
    return (
        <div className="mission-vision-block">
            <div className="mission">
                <div>
                    <img className="vision-mission-image" src={Dog1} alt="Dog" />
                </div>
                <div>mision</div>
            </div>

            <div className="mission">
                <div>
                    <img className="vision-mission-image" src={Dog2} alt="Dog 2" />
                </div>
                <div>vision</div>
            </div>
        </div>
    )
}

export default missionVisionBlock
