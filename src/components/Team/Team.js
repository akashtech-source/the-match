import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    console.log(props.team);
    const {strTeamBadge, strTeam, strSport, idTeam} = props.team;
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/detail/${id}`)
    }
    return (
        <div>
            
            <div className="team-name">
            <img src={strTeamBadge} alt=""/>
            <h3>{strTeam}</h3>
            <p>Sports Type: {strSport}</p>
            <button className="main-button" onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
            </div>

        </div>
    );
};

export default Team;