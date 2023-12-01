import React, { useEffect, useState } from 'react';
import { set, get, ref } from 'firebase/database';
import { auth, database } from '../database/firebase';
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import LoginModule from "./loginModule";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/CommentSection.css'

function CommentsModule() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [currComment,setCurrComment] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const writeComment = async () => {
        try {
            const dateTime = new Date().toLocaleString();
            const path = `Pages/Rafa/Comments`;
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

            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsPath = `Pages/Rafa/Comments`;
                const snapshot = await get(ref(database, commentsPath));
                const commentsArray = snapshot.val() || [];
                setComments(Object.values(commentsArray));
            } catch (error) {
                console.error('Error fetching comments:', error.message);
                setComments([]);
            }
        };

        if (user) {
            fetchComments().then(r => r);
        }
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Button
                variant="outline-success"
                type="submit"
                onClick={writeComment}
                style={{
                    fontFamily: 'Roboto, sans-serif',
                    backgroundColor: '#FB2576',
                    outlineColor: '#FB2576',
                    color: 'white',
                    border: 'none',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                Write to database now
            </Button>
            <Container className={"comments-container"} fluid>
                <Row>
                    {comments.length === 0 ? (
                        <p style={{ color: 'white' }}>No comments</p>
                    ) : (


                        comments.map((comment, index) => (
                            <Col xs = {12} className={'comment-container'}>
                                <div key={index} className={'comment-box'} style={{color :"white"}}>
                                    {/*todo put all of this in a comment container*/}
                                    <p className={'comment-user'}>{ comment.userEmail}</p>
                                    <p className={'comment-date'}>{`Date: ${comment.time}`}</p>
                                    <p className={'comment-data'}>{`Comment: ${comment.data}`}</p>
                                </div>
                            </Col>
                        ))
                    )}
                    <Col xs = {12} className={'comments-container'} style = {{backgroundColor:"red"}}>
                        <div className={'comment-box'} style={{color :"white"}}>
                            <p className={'comment-user'}>{user.email}</p>


                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default CommentsModule;
