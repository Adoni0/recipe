import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import RecipeSearchBar from '../components/RecipeSearchBar'
import Suggestions from '../components/Suggestions'
import RecipeCarousel from '../components/RecipeCarousel'
import { FontAwesome } from '@expo/vector-icons';
import spoonacularApi from '../api/spoonacular'

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     spoonacularApi.randomRecipes()
    //     .then(res => console.log(res.data.recipes))
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <View style={styles.recipe}>
            <RecipeSearchBar
                term={searchTerm}
                setTerm={setSearchTerm}
            />
            <Suggestions />

            <View style={styles.carouselContainer}>
                <RecipeCarousel />
                <RecipeCarousel />
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
