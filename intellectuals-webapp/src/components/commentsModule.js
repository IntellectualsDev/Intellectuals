import React, { useEffect, useState } from 'react';
import { set, get, ref } from 'firebase/database';
import { auth, database } from '../database/firebase';
import { Button } from 'react-bootstrap';

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

    const writeComment = async () => {
        try {
            const commentData = { comment: 'Test comment' };
            const path = `comments/user/${user.uid}`;
            const snapshot = await get(ref(database, path));
            const currList = snapshot.val() || [];
            const newList = [...currList];
            newList.push(commentData);

            await set(ref(database, path), newList);

            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsPath = `comments/user/${user.uid}`;
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
            {comments.length === 0 ? (
                <p style={{ color: 'white' }}>Loading</p>
            ) : (
                comments.map((comment, index) => (
                    <p key={index} style={{ color: 'white' }}>{`Comment: ${comment.comment}`}</p>
                ))
            )}
        </div>
    );
}

export default CommentsModule;
