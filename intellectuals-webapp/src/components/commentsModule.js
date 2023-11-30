import React, { useEffect, useState } from 'react';
import { set, get, ref } from 'firebase/database';
import { auth, database } from '../database/firebase';
import { Button } from 'react-bootstrap';
import Container from "react-bootstrap/Container";

function CommentsModule() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const initDb = async () => {
        try {
            const commentData = { data: 'Test comment' };
            const userInfo = {userId: 'Bob@gmail.com'}
            const dateTime = new Date().toLocaleString();
            const json = {
                "time" : dateTime,
                "data": "Initial comment",
                "userEmail": user.email,
            }

            const path = "Pages/Eli/Comments";
            const newList = [json];
            await set(ref(database, path), newList);

            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }

    };
    const writeComment = async () => {
        try {
            const commentData = { comment: 'Added comment' };
            const dateTime = new Date().toLocaleString();
            const path = `Pages/Rafa/Comments`;
            const snapshot = await get(ref(database, path));
            const currList = snapshot.val() || [];
            const newList = [...currList];

            const json = {
                "time" : dateTime,
                "data": "Initial comment",
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
            <Container className={"comments-container"}>

            </Container>
            {comments.length === 0 ? (
                <p style={{ color: 'white' }}>No comments</p>
            ) : (


                comments.map((comment, index) => (
                    <div key={index} style={{ color: 'white' }}>
{/*todo put all of this in a comment container*/}
                        <p>{`Author: ${comment.userEmail}`}</p>
                        <p>{`Date: ${comment.time}`}</p>
                        <p>{`Comment: ${comment.data}`}</p>


                    </div> //do one container for each comment
                ))
            )}
        </div>
    );
}

export default CommentsModule;
