import axios from 'axios';

var apiKey = process.env.REACT_APP_API_KEY;

export default {
    searchRecipe: (term) => {
        return axios.get(`https://api.spoonacular.com/recipes/complexSearch/?query=${term}&apiKey=${apiKey}`)
    },
    searchIngredients: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/information&apiKey=${apiKey}`)
    },
    searchInstructions: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions&apiKey=${apiKey}`)
    }
}