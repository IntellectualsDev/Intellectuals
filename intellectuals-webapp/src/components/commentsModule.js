import React, { useEffect, useState, } from 'react';
import { set, get, ref } from 'firebase/database';
import { auth, database } from '../database/firebase';
import { Button, Form } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import { FaPaperPlane } from 'react-icons/fa';
import LoginModule from "./loginModule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/CommentSection.css'
import '../css/GlobalNav.css'

function CommentsModule({pathPage}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [currComment,setCurrComment] = useState("");

    let palettes = ["#E5C1BD", "#662E9B", "#43BCCD", "#7FB069", "#D36135", "#02020B", "#33888a", "#57c1ac", "#233e3c" ,'#000000', '#832161', '#DA4167']

    useEffect(() => {


        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const fetchComments = async () => {
        try {
            const commentsPath = `Pages${pathPage}/Comments`;
            const snapshot = await get(ref(database, commentsPath));
            const commentsArray = snapshot.val() || [];
            setComments(Object.values(commentsArray));
        } catch (error) {
            console.error('Error fetching comments:', error.message);
            setComments([]);
        }
    };

    const writeComment = async () => {
        try {
            const dateTime = new Date().toLocaleString();
            const path = `Pages${pathPage}/Comments`;
            const snapshot = await get(ref(database, path));
            const currList = snapshot.val() || [];
            const newList = [...currList];

            const json = {
                "time" : dateTime,
                "data": currComment,
                "userEmail": user.email,
            }

            newList.push(json);

            await set(ref(database, path), newList);

            setCurrComment('');

            await fetchComments();
            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }
    };


    useEffect(() => {

            fetchComments().then(r => r);

    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={"maindiv"}>
            <h1 className={'Theader'}>Comments</h1>
            <Container className={"comments-container"} fluid>

                <Row>
                    {comments.length === 0 ? (
                        <p style={{ color: 'white' }}>No comments</p>
                    ) : (
                        comments.map((comment, index) => (
                            <Col key={index} xs = {12} className={'comments-container'}>

                                <div className={"circle-for-comment"}>

                                    <div className="comment-user-circle" style={{backgroundColor: "blue"}}>
                                        {comment && comment.userEmail[0]}
                                    </div>
                                    <p style={{ color: 'white', marginTop:'4px', marginLeft: '-40px' }}>{comment.userEmail}</p>
                                </div>
                                    <p className={'comment-data'}>{`Comment: ${comment.data}`}</p>
                                <p className={'comment-date'}>{` ${comment.time}`}</p>

                            </Col>
                        ))
                    )}

                    {user ? (
                        <Col xs={12} className={'upload-column'} style={{borderTop: "1px solid white"}}>
                            <div className="comment-section">
                                <Form>
                                    <div className={"circle-for-comment"}>
                                        <div className="comment-user-circle" style={{backgroundColor: "#E63946"}}>
                                            {user && user.email[0]}
                                        </div>
                                        <p style={{ color: 'white', marginTop:'4px', marginLeft: '-40px' }}>{user.email}</p>
                                    </div>

                                    <Form.Group controlId="commentTextArea">
                                        <Form.Control
                                            className={'custom-textarea'}
                                            as="textarea"
                                            rows={3}
                                            style={{ width: '80vw', minWidth: '200px', marginTop: '0.2%',height: ''}}
                                            placeholder="Write your comment..."
                                            value={currComment}
                                            onChange={(e) => setCurrComment(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button variant="outline-success" className={"sign-out-button"} style={{ position:"relative",zIndex: "5" ,marginTop:'10px'}} onClick={writeComment} >
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>


                        ) :
                                <Col xs={12} style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingBottom:"6%",
                                    paddingTop:"2%"
                                }}>
                                    <p className="text-white">Log in or Sign up to comment </p>
                                    <a href = '/login'>
                                        <Button variant="outline-success" size="lg" style={{backgroundColor:"#E63946",border:'none', width: "200px" }}>
                                            Log in / Sign up
                                        </Button>
                                    </a>

                                </Col>}


                </Row>
            </Container>

        </div>
    );
}

export default CommentsModule;
