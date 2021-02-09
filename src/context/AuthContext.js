import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import recipeApi from '../api/recipe'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'signin':
           return { token: action.payload, errorMessage: '' }; 
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'clear_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const trySignInOnMount = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token){
        dispatch({ type: 'signin', payload: token });
        navigate('mainFlow');
    } else {
        navigate('loginFlow');
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await recipeApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('mainFlow');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Issue with sign up' })
    }
};

const signin = dispatch => async({ email, password }) => {

    try {
        const response = await recipeApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('mainFlow');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Issue with sign in!' })
    }

};

const clearErrorMessage = dispatch => async() => {
    dispatch({ type: 'clear_error', payload: '' })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, trySignInOnMount, clearErrorMessage },
    { token: null, errorMessage: '' }
);