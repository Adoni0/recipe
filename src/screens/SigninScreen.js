import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthFrom from '../components/AuthForm'
import { Context } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import Navlink from '../components/Navlink'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthFrom
                authText="Sign In For Delicious Recipes"
                submitButtonText="Sign In"
                submit={signin}
                errorMessage={state.errorMessage}
            />
            <Navlink
                linkText="Don't have an account? Sign up here!"
                routeName="Signup"
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SigninScreen
