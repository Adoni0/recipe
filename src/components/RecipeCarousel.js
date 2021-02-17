import React from 'react'
// import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

const RecipeCarousel = ({ recipes }) => {

    if(!recipes.length) {
        return null
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recipes}
            keyExtractor={recipes => recipes.id}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <AntDesign style={styles.icon} name="heart" size={35} color="white" />
                        <Image source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <Text style={styles.label}>{item.title}</Text>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 225,
        paddingBottom: 20,
        marginHorizontal: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    label: {
        zIndex: 1,
        position: 'relative',
        bottom: 50,
        left: 20,
        fontSize: 14,
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
