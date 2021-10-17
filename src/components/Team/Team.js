import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {strTeam , strTeamBadge, strSport ,idTeam } = props.team;
    const history = useHistory()
    const handleTeam= (idTeam) =>{
        const url = `team/${idTeam}`
        history.push(url)
    }
    return (
        <div className="team-info ">
            <img src={strTeamBadge} className="team-logo mb-2" alt="" />
            <h4><strong>{strTeam}</strong></h4>
            <p>Sports Type: {strSport}</p>
            <Button variant="primary" onClick={()=>handleTeam(idTeam)}>Explore  <FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    );
};

export default Team;