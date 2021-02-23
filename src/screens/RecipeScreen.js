import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import RecipeSearchBar from '../components/RecipeSearchBar'
import Suggestions from '../components/Suggestions'
import RecipeCarousel from '../components/RecipeCarousel'
import { FontAwesome } from '@expo/vector-icons';
import spoonacularApi from '../api/spoonacular'
import { Context as RecipeContext } from '../context/RecipeContext'
import recipeSplit from '../utils/recipeSplit'

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { addFavorite } = useContext(RecipeContext);

    const [row1, setRow1] = useState([]);
    const [row2, setRow2] = useState([]);

    useEffect(() => {
        spoonacularApi.randomRecipes()
            .then(res => {
                const { row1, row2 } = recipeSplit(res.data.recipes)
                setRow1(row1[0])
                setRow2(row2[0])
            })
            .catch(err => console.log(err))
    }, [])

    const suggestionSearch = (suggestion) => {
        spoonacularApi.searchRecipe(suggestion)
            .then(res => {
                const { row1, row2 } = recipeSplit(res.data.results)
                setRow1(row1[0])
                setRow2(row2[0])
            })
            .catch(err => console.log(err))
    }

    const searchByTerm = () => {
        spoonacularApi.searchRecipe(searchTerm)
            .then(res => {
                const { row1, row2 } = recipeSplit(res.data.results)
                setRow1(row1[0])
                setRow2(row2[0])
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.recipe}>
            <RecipeSearchBar
                searchByTerm={searchByTerm}
                term={searchTerm}
                setTerm={setSearchTerm}
            />
            <Suggestions suggestionSearch={suggestionSearch} />

            <View style={styles.carouselContainer}>
                <RecipeCarousel
                    addFav={addFavorite}
                    recipes={row1} />
                <RecipeCarousel
                    addFav={addFavorite}
                    recipes={row2} />
            </View>
            <Button
                icon={
                    <FontAwesome style={styles.filter} name="filter" size={24} color="black" />
                }
                title="Filter"
                type="outline"
                buttonStyle={{ width: 100, marginHorizontal: 150, marginVertical: 40 }}
            />
        </View>
    )
}

RecipeScreen.navigationOptions = {
    title: 'Recipes'
}

const styles = StyleSheet.create({
    recipe: {
        marginVertical: 60,
        backgroundColor: 'rgb(242,242,242)',
        paddingBottom: 55
    },
    filter: {
        paddingRight: 5,
    },
    carouselContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    }
});

export default RecipeScreen
