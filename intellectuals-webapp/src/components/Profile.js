import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Profile.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function Profile(){







    return (
        <div className={'mainDiv'}>


        <Container
            fluid
        >
            <Row className={'topRow'}>
                <Col xs = {4} className={'leftProfile'}>

                </Col>
                <Col className={'rightProfile'}>
                    <Row className={'trajectory'}>
                        <Col xs = {5} className={'education'}>
                            <div className={'roundedBox'}>
                                <div className={'textArea'}>
                                    <h1 className={'header'}>Education</h1>
                                    <p className={'my-p'}>University of Iowa:</p>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <p className={'my-p'}>B.S.E Computer Science Engineering</p>
                                    <p className={'my-p'}>Minor Arts</p>
                                </div>
                            </div>
                        </Col>
                        <Col className={'experience'}>
                            <div className={'roundedBox'}>

                            </div>
                        </Col>
                    </Row>
                    <Row className={'skills'}>
                        <Col xs = {7} className={'technical'}>
                            <div className={'roundedBox'}>

                            </div>
                        </Col>
                        <Col className={'personal'}>
                            <div className={'roundedBox'}>

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className = {'bottomRow'}>

            </Row>
        </Container>
        </div>
    )
}
export default Profile;

