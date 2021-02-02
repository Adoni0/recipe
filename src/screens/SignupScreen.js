import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm'
import { Context } from '../context/AuthContext'

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(Context);

    return (
        <View>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                authText="Sign Up Here"
                submit={signup}
            />
        </View>
    )
};


export default SignupScreen
