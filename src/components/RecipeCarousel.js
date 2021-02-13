import React from 'react'
// import Carousel from 'react-native-snap-carousel';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const RecipeCarousel = () => {

    return (
        <Card containerStyle={{ height: 450 }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Divider />
            <Card.Image source={'https://source.unsplash.com/random'}>
                <Text>This is a test for a card</Text>
                <Button
                    title="view"
                />
            </Card.Image>
        </Card>
    )
}

export default RecipeCarousel
