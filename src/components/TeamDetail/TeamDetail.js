import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import maleTeam from '../images/male.png'
import femaleTeam from '../images/female.png'
import './TeamDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faGlobe, faPodcast, faTransgender } from '@fortawesome/free-solid-svg-icons';
import { faGithub,  faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Match from '../Match/Match';

const TeamDetail = () => {
    let { teamId } = useParams()
    const [details, setDetails] = useState({})
    const [soccerMatch, setSoccerMatch] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [teamId])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSoccerMatch(data.results))
    }, [teamId])

    const { strCountry, strTeam, strDescriptionEN, strDescriptionIT, strGender,
        strSport, intFormedYear, strStadiumThumb, strTeamBadge } = details

    return (
        <div className="">
            <Card className="text-white" style={{ border: 'none' }}>
                <Card.Img src={strStadiumThumb} alt="Card image" style={{ height: '350px', opacity: '0.7' }} />
                <Card.ImgOverlay>
                    <img src={strTeamBadge} alt="" style={{ width: '160px', display: 'block', margin: 'auto', paddingTop: '25px' }} />
                </Card.ImgOverlay>
            </Card>
            <Container>
                <div className="text-white p-2 details-container">
                    <Row>
                        <Col sm={7}>
                            <div className="pt-3 content ">
                                <h3>{strTeam}</h3>
                                <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</p>
                                <p><FontAwesomeIcon icon={faFlag} />  country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faTransgender} /> Gender: {strGender}</p>
                            </div>
                        </Col>
                        <Col sm={5}>
                            {
                                strGender === 'Male' ? <img src={maleTeam} alt="" width="400px" /> : <img src={femaleTeam} alt="" width="400px" />
                            }
                        </Col>
                    </Row>
                </div>

                <p className="text-light mt-3">{strDescriptionEN}</p>
                <br />
                <p className="text-light">{strDescriptionIT}</p>
                <div className="social-media text-center pb-3">
                    <a className="twitter" href='http://twitter.com/'><FontAwesomeIcon icon={faTwitter} target="_blank" /></a>
                    <a className="website" href='www.avfc.co.uk'><FontAwesomeIcon icon={faGlobe} target="_blank" /></a>
                    <a className="youtube" href='www.youtube.com/user/avfcofficial'><FontAwesomeIcon icon={faYoutube} target="_blank" /></a>
                    <a className="github" href="https://github.com/mahmudimran?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>

                </div>
                {
                    soccerMatch.map(match => <Match match={match} key={match.idAwayTeam}></Match>)
                }
            </Container>

        </div>

    );
};

export default TeamDetail;