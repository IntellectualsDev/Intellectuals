import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Profile.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Image } from 'react-bootstrap';
import CommentModule from "./commentModule";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Profile = ({JSON}) =>{

    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            document.querySelectorAll('.fade-element').forEach(el => {
                el.classList.remove('fade-in');
                el.classList.add('fade-out');
            });
        } else {
            // Scrolling up
            document.querySelectorAll('.fade-element').forEach(el => {
                el.classList.remove('fade-out');
                el.classList.add('fade-in');
            });
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
    return (
        <div className={'mainDiv'}>


        <Container
            fluid
        >
            <div className={"fade-element"}>
                <Row className={'titleContainer'}>
                    <Col>
                        <h1 className="title">{JSON.name}</h1>
                        <div className={'oval'}>
                            <h2 className="subtitle">{JSON.about}</h2>
                        </div>

                    </Col>

                </Row>
                <Row className={'arrow-container'}>
                    <Col xs = {12} style={{height:"20vh"}}>
                        <h2 className="text-above-arrow">Scroll Down</h2>
                        <div className={'arrow'}>
                            <i className="bi bi-arrow-bar-down arrow"/>
                        </div>

                    </Col>

                </Row>
            </div>

            <Row className={'topRow'} >
                <Col xs ={1}>

                </Col>
                <Col xs = {10} className={'leftProfile'} >
                    <Row>
                        <Col xs ={4}>
                            <img  src = {process.env.PUBLIC_URL + '/display-pic.png'}
                                  alt = "Profile Image"
                                  className={'profileImage image'}
                                  style={{width:"auto", height:"25vw",marginTop:"5%"}}
                            />

                        </Col>
                        <Col className={'about-me'}>
                            <div>
                                <h1 style={{fontSize:"55px", fontWeight:"700"}}>{JSON.aboutMe}</h1>
                            </div>
                        </Col>
                    </Row>


                    {/*<Row className={'personalRow'}>*/}
                    {/*    <Col xs = {12}>*/}


                    {/*    </Col>*/}
                    {/*    <Col xs = {12}>*/}
                    {/*        <div className={'buttonDiv'}>*/}
                    {/*            <Button*/}
                    {/*                href="https://github.com/pokeham"*/}
                    {/*                className="icon-button"*/}
                    {/*                target="_blank"*/}
                    {/*                rel="noopener noreferrer"*/}
                    {/*            >*/}
                    {/*                <FontAwesomeIcon icon={faGithub} style={{fontSize:"50px"}} />*/}
                    {/*            </Button>*/}

                    {/*            /!* LinkedIn Button *!/*/}
                    {/*            <Button*/}
                    {/*                href="https://linkedin.com/in/yourusername"*/}
                    {/*                className="icon-button"*/}
                    {/*                target="_blank"*/}
                    {/*                rel="noopener noreferrer"*/}
                    {/*            >*/}
                    {/*                <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:"50px"}}/>*/}
                    {/*            </Button>*/}
                    {/*        </div>*/}
                    {/*    </Col>*/}


                    {/*</Row>*/}
                </Col>
                <Col xs = {1}>

                </Col>
                <Col xs = {1}>

                </Col>
                <Col  xs = {10} className={'rightProfile'}>
                    <Row className={'trajectory'    }>
                        <h1 className={'Theader'}>Trajectory</h1>

                        <Col  xs = {5} className={'education'}>
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
                        <Col  className={'experience'}>
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
                        <Col   xs = {9} className={'skillsHeader'}>
                            <h1 className={'Sheader'}>Skills</h1>
                        </Col>
                        <Col  xs = {7} className={'technical'}>

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
                                            {JSON.professional2.map((item,index)=>(
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
                        <Col  className={'personal'}>
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

