import createDataContext from './createDataContext'
import recipeApi from '../api/recipe'

const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'get_list':
            return { ...state, list: [...action.payload] }
        case 'get_favs':
            return { ...state, favs: [...action.payload] }
        case 'add_error':
            return { errorMessage: action.payload }
        default:
            return state;
    }
};

const addFavorite = dispatch => async (ingredients, instructions, title, image) => {
    try {
        await recipeApi.post('/favs', { ingredients, instructions, title, image });
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Could not add to favorites' })
    }
};

const getFavorites = dispatch => async () => {
    const response = await recipeApi.get('/favs');
    dispatch({ type: 'get_favs', payload: response.data });
};

const getList = dispatch => async () => {
    const response = await recipeApi.get('/shoplist');
    dispatch({ type: 'get_list', payload: response.data });
};

const addToList = dispatch => async (ingredient) => {
    await recipeApi.post('/shoplist', { ingredient });
};

export const { Provider, Context } = createDataContext(
    recipeReducer,
    { addFavorite, addToList, getFavorites, getList },
    { favs: [], list: [], errorMessage: '' }
);