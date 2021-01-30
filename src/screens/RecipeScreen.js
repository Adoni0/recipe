import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import RecipeSearchBar from '../components/RecipeSearchBar'
import RecipeCarousel from '../components/RecipeCarousel'

const RecipeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View>
            <RecipeSearchBar 
            term={searchTerm}
            setTerm={setSearchTerm}
            />
            <Text>This is the Recipe Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default RecipeScreen
