import React, { useEffect, useState } from 'react';
import { set, get, ref } from 'firebase/database';
import { auth, database } from '../database/firebase';
import { Button } from 'react-bootstrap';

function CommentModule(){
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
                "data": "example",
                "userEmail": user,
            }

            const path = "Pages/Joseph/Comments";
            const newList = [json];
            await set(ref(database, path), newList);

            console.log('Data updated successfully');
        } catch (error) {
            console.error('Error updating data:', error.message);
        }

        if (loading) {
            return <p>Loading...</p>;
        }

    };
    const handleDbUpdate = async () => {
        // Call the initDb function when the button is clicked
        await initDb();
    };
    return(
        <div>
            <p>{user}</p>
            <p>Something</p>
            <Button
                variant="outline-success"
                type="submit"
                onClick={handleDbUpdate}
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
        </div>
    )
}
export default CommentModule;
