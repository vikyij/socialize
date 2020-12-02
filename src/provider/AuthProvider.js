import React, { useState } from 'react';
import { authmethods } from '../firebase/authmethods'
export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null)

    const handleSignup = () => {
        // middle man between firebase and signup 
        console.log('handleSignup')
        // calling signup from firebase server
        return authmethods.signup(inputs.email,inputs.password, setErrors, setToken)
    }

    const handleLogin = () => {
        // middle man between firebase and signup 
        console.log('handlelogin')
        // calling signup from firebase server
        return authmethods.signin(inputs.email,inputs.password, setErrors, setToken)
    }

    return (
        <firebaseAuth.Provider
            value={{
                handleSignup,
                inputs,
                setInputs,
                errors, 
                handleLogin
            }}>
            {props.children}

        </firebaseAuth.Provider>
    );
};

export default AuthProvider;
