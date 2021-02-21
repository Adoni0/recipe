import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Context as RecipeContext } from '../context/RecipeContext'
import FavCarousel from '../components/FavCarousel'

const FavScreen = () => {

    const { state, getFavorites } = useContext(RecipeContext)

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <View style={styles.favs}>
            <Text>This is the favorites screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    favs: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export default FavScreen
