import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Match.css'

const Match = (props) => {
    console.log(props)
    const { strEvent, dateEvent, strStatus, strSeason, strThumb } = props.match
    return (
        <Container>
            <div className='match-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strThumb} />
                    <Card.Body className="text-dark pb-1">
                        <h5><strong>Event: {strEvent}</strong></h5>
                        <p className="mb-1">Status: {strStatus}</p>
                        <p className="mb-1">Date: {dateEvent}</p>
                        <p>Season: {strSeason}</p>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Match;