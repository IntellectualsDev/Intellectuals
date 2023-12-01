import '../css/LoginModule.css';
import { Container, Form, FormControl, Button,InputGroup } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { auth } from '../database/firebase';
import{ createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';






function LoginModule() {


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();
    const handleAuth = async () => {

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (signInError) {
            if (signInError.code === 'auth/invalid-credential') {

                try {
                    const newUserCredentials = await createUserWithEmailAndPassword(auth, email, password);
                    navigate('/');
                } catch (signUpError) {
                    console.error('sing up error: ' + signUpError.message);
                    loginErrorHandling(signUpError.message);
                }
            } else {
                console.error('log in error: ' + signInError.message);
                loginErrorHandling(signInError.message);
            }
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [maxLabelWidth, setMaxLabelWidth] = useState(0);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [showErrorPassword, setShowErrorPassword] = useState(false);
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

    useEffect(() => {
        const emailLabelWidth = document.getElementById('emailLabel').offsetWidth;
        const passwordLabelWidth = document.getElementById('passwordLabel').offsetWidth;
        setMaxLabelWidth(400);
        }, []);

    const loginErrorHandling = (errorString) => {
        if(errorString === 'Firebase: Error (auth/invalid-email).'){
            setShowErrorEmail(true);
            setErrorEmailMessage("Invalid email format")
        }
        else if (errorString === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            setShowErrorPassword(true);
            setErrorPasswordMessage("Password must be at least 6 characters ")
        }
        else if (errorString === 'Firebase: Error (auth/email-already-in-use).'){
            setShowErrorPassword(true);
            setErrorPasswordMessage("Email is already in use, if this is your account the password is incorrect")
        }
        else if (errorString === 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'){
            setShowErrorEmail(true);
            setErrorEmailMessage("Account temporarily disabled due to too many login attempts")
        }

    }
    const tryLogin = () => {
        if(email !== '' && password !== ''){
            setShowErrorPassword(false);
            setShowErrorEmail(false);
            handleAuth().then(r => r);
        }

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
        <div
            style={{
                height: '92vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY:"hidden"
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

                {showErrorEmail && <div className={"error-message"} style={{ alignSelf: 'flex-start', flexWrap: 'wrap' }} >{errorEmailMessage}</div>}

            </Form>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label id="passwordLabel" className="textbox-title">Enter password</Form.Label>
                <div className="password-container">
                <InputGroup style={{
                    width: `${maxLabelWidth}px`,
                    marginBottom: showErrorPassword ? '5px' : '40px',
                    ...(showErrorPassword && {
                        outline: '2px solid #ff3333',
                        boxShadow: '0 0 10px rgba(251, 37, 118, 0.5)',
                    }),
                }}>
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}


                    />

                    <Button
                        variant="outline-secondary"
                        onClick={togglePasswordVisibility}
                        className="whiteOutlineButton"
                    >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </Button>

                </InputGroup>
                </div>
                {showErrorPassword && (
                    <div className="error-message-container">
                        <div className="error-message">{errorPasswordMessage}</div>
                    </div>
                )}
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

        </div>
    )}

export default LoginModule;