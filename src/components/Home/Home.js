import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import topBanner from '../../images/The-stadium_01982368c4b5db6822abe729707173d7.jpeg';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    }, [])
    return (
        <div className="home-container">
            <img src={topBanner} alt="" width="1400" height="300"/>
            {
                teams.map(team => <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;