import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'

export const FavCarousel = ({ image, title }) => {

    const renderItem = () => {
        <View style={styles.render}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text>{title}</Text>
        </View>
    }

    return (
        <View style={styles.render}>
            <Carousel
                layout="default"
                data={image}
                sliderWidth={150}
                itemWidth={150}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    render: {
        flex: 1,
        alignItems: 'center',
        justifyCOntent: 'center',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.28,
        shadowRadius: 10.78,
        elevation: 1
    },
    image: {
        width: 150,
        aspectRatio: 1.1
    }
})

export default FavCarousel