import React, { useEffect, useState } from 'react';
import { Card, Container, } from 'react-bootstrap';
import banner from '../images/banner.jpg'
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams.slice(0, 15)))
    }, [])
    return (
        <div >
            <Card className="bg-dark text-white" style={{ border: 'none' }}>
                <Card.Img src={banner} alt="Card image"/>
                <Card.ImgOverlay>
                    <h2 className="text-center" style={{ marginTop: '38px' }}>Legends Team</h2>
                </Card.ImgOverlay>
            </Card>
            <Container>
                <div className="pt-5">
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;