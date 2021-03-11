import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../teamDetails/TeamDetails';

const EachTeam = () => {
    const {teamId} = useParams();
    const [teams, setTeams] = useState([]);
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            
            {
                teams.map(team => <TeamDetails team={team}></TeamDetails>)
            }
        </div>
    );
};

export default EachTeam;