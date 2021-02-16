import React from 'react'
// import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

const RecipeCarousel = () => {

    return (
        <View style={styles.card}>
            <AntDesign style={styles.icon} name="heart" size={35} color="white" />
            <Image source={{
                uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
                }}
                style={styles.image}
                />
                <Text style={styles.label}>Recipe Name</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 350,
        height: 220,
        paddingBottom: 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    label: {
        zIndex: 1, 
        position: 'relative',
        bottom: 50,
        left: 20,
        fontSize: 20,
        color: 'white', 
        fontWeight: 'bold'
    },
    icon: {
        zIndex: 1,
        position: 'relative',
        top: 50,
        left: 20
    }
})

export default RecipeCarousel
