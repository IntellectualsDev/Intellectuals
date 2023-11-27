import '../css/LoginModule.css';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function LoginModule() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [maxLabelWidth, setMaxLabelWidth] = useState(0);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');


    useEffect(() => {
        // Calculate the maximum label width
        const emailLabelWidth = document.getElementById('emailLabel').offsetWidth;
        const passwordLabelWidth = document.getElementById('passwordLabel').offsetWidth;
        setMaxLabelWidth(400);
    }, []);

    const tryLogin = () => {
        if (email === ''){
            setShowErrorEmail(true);
            setErrorEmailMessage("Missing email");
        }
        else {
            setShowErrorEmail(false);
        }
        if (password === ''){
            setShowErrorPassword(true);
            setErrorPasswordMessage("Missing password");
        }
        else {
            setShowErrorPassword(false);
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        tryLogin();
    };

    return (
        <Container
            fluid
            style={{
                height: '100vh',  // Set the height to 100% of the viewport height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1 className={"heading"}>Welcome 👋 </h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label id="emailLabel" className="textbox-title">Enter email or Phone number</Form.Label>
                <FormControl
                    type="text"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                        width: `${maxLabelWidth}px`,
                        marginBottom: showErrorEmail ? '5px' : '20px',
                        ...(showErrorEmail && {
                            outline: '2px solid #ff3333',
                            boxShadow: '0 0 10px rgba(251, 37, 118, 0.5)',
                        }),
                    }}
                />
                {showErrorEmail && <div className={"error-message"} style={{ alignSelf: 'flex-start' }} >{errorEmailMessage}</div>}

            </Form>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label id="passwordLabel" className="textbox-title">Enter password</Form.Label>
                <FormControl
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}

                    style={{
                        width: `${maxLabelWidth}px`,
                        marginBottom: showErrorPassword ? '5px' : '40px',
                        ...(showErrorPassword && {
                            outline: '2px solid #ff3333',
                            boxShadow: '0 0 10px rgba(251, 37, 118, 0.5)',
                        }),
                    }}
                />
                {showErrorPassword && <div className={"error-message"} style={{ alignSelf: 'flex-start' }}>{errorPasswordMessage}</div>}
            </Form>

            <Button
                variant="outline-success"
                type="submit"
                onClick={handleFormSubmit}
                style={{
                    width: `${maxLabelWidth}px`,
                    fontFamily: 'Roboto, sans-serif',
                    backgroundColor: '#FB2576',
                    outlineColor: '#FB2576',
                    color: 'white',
                    border: "none",
                    transition: 'all 0.3s ease-in-out',

                }}
            >
                LOG IN / SIGN UP
            </Button>

        </Container>
    )}

export default LoginModule;