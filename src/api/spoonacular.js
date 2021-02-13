import axios from 'axios';

var apiKey = process.env.REACT_APP_API_KEY;

export default {
    searchRecipe: (term) => {
        return axios.get(`https://api.spoonacular.com/recipes/complexSearch?q${term}&apiKey=${apiKey}`)
    },
    searchIngredients: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/information&apiKey=${apiKey}`)
    },
    searchInstructions: (id) => {
        return axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions&apiKey=${apiKey}`)
    },
    randomRecipes: () => {
        return axios.get(`https://api.spoonacular.com/recipes/random&apiKey=${apiKey}`)
    }
}