import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Profile.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Image } from 'react-bootstrap';
import CommentModule from "./commentModule";


const Profile = ({JSON}) =>{


    return (
        <div className={'mainDiv'}>


        <Container
            fluid
        >
            <Row className={'topRow'}>
                <Col xs = {1}>

                </Col>
                <Col xs = {4} className={'leftProfile'}>
                    <Row className={'imageRow'}>
                        <Col xs ={12} className={"d-flex justify-content-center align-content-center"}>


                        <img src = {process.env.PUBLIC_URL + '/display-pic.png'}
                             alt = "Profile Image"
                             className={'profileImage image'}
                             style={{width:"auto", height:"60%",marginTop:"10%"}}
                        />
                        </Col>
                    </Row>
                    <Row className={'personalRow'}>

                    </Row>
                </Col>

                <Col className={'rightProfile'}>
                    <Row className={'trajectory'}>
                        <Col xs = {9} className={'trajectoryHeader'}>
                            <h1 className={'Theader'}>Trajectory</h1>
                        </Col>
                        <Col xs = {5} className={'education'}>
                            <div className={'roundedBox'}>
                                <div className={'textArea'}>
                                    <h1 className={'header'}>Education</h1>
                                    {JSON.education.map((item,index)=>(
                                        <div key = {index} className={"bulletPoint"}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <p className={'my-p inline'}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col className={'experience'}>
                            <div className={'roundedBox'}>
                                <div className={'textArea'}>
                                    <h1 className={'header'}>Experience</h1>
                                    {JSON.experience.map((item,index)=>(
                                        <div key = {index} className={"bulletPoint"}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <p className={'my-p inline'}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'skills'}>
                        <Col xs = {9} className={'skillsHeader'}>
                            <h1 className={'Sheader'}>Skills</h1>
                        </Col>
                        <Col xs = {7} className={'technical'}>

                            <div className={'roundedBox'}>
                                <div className={'textArea'}>
                                    <h1 className={'header'}>Professional</h1>
                                    <Row>
                                        <Col className={'half1'}>
                                            {JSON.professional.map((item,index)=>(
                                                <div key = {index} className={"bulletPoint"}>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <p className={'my-p inline'}>{item}</p>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col className={'half2'}>
                                            {JSON.professional.map((item,index)=>(
                                                <div key = {index} className={"bulletPoint"}>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    <p className={'my-p inline'}>{item}</p>
                                                </div>
                                            ))}
                                        </Col>
                                    </Row>


                                </div>
                            </div>
                        </Col>
                        <Col className={'personal'}>
                            <div className={'roundedBox'}>
                                <div className={'textArea'}>
                                    <h1 className={'header'}>Personal</h1>
                                    {JSON.personal.map((item,index)=>(
                                        <div key = {index} className={"bulletPoint"}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            <p className={'my-p inline'}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs = {1}>

                </Col>
            </Row>
            <Row className = {'bottomRow'}>
                {/*<CommentModule/>*/}

            </Row>
        </Container>
        </div>

    )
}
export default Profile;

