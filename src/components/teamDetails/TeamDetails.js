import React from 'react';
import './TeamDetails.css';
import playersMale from '../../images/Rectangle 28.png';
import playersFemale from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetails = (props) => {
    console.log(props.team);
    const {strTeamBanner, strTeamLogo, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN} = props.team;

    return (
        <section className="body">

            <div>
            <img src={strTeamBanner} alt="" width="1350" height="300"/>
            </div>
            <div className="logo">
            <img src={strTeamLogo} alt="" width="300" height="120"/>
            </div>

            <div className="team-container">
                <div className="team-info half-width">
                    <h2>{strTeam}</h2>
                    <h3>Founded: {intFormedYear}</h3>
                    <h3>Country: {strCountry}</h3>
                    <h4>Sport Type:{strSport}</h4>
                    <h4>Gender: {strGender}</h4>
                </div>
                <div className="half-width">
                    {
                         strGender === 'Male'? <img src={playersMale} alt=""/>:<img src={playersFemale} alt=""/>
                    }
                </div>
            </div>

                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>


                <div className="icon-pack">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                    </div>
        </section>
    );
};

export default TeamDetails;