import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthFrom from '../components/AuthForm'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    return (
        <AuthFrom 
        authText="Sign In"
        submit={signin}
        />
    )
}

export default SigninScreen
