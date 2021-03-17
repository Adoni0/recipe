import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { Context as RecipeContext } from '../context/RecipeContext'
// import FavCarousel from '../components/FavCarousel'
import { AntDesign } from '@expo/vector-icons';

const FavScreen = () => {

    const { state: { favs }, getFavorites } = useContext(RecipeContext)

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <View style={styles.favs}>
            {favs ? 
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={favs}
                keyExtractor={(favs) => favs.recpieId}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <AntDesign
                                style={styles.icon}
                                name="heart"
                                size={35}
                                color="white"
                            />
                            <Image source={{ uri: item.image }}
                                style={styles.image}
                            />
                            <Text style={styles.label}>{item.title}</Text>
                        </View>
                    )
                }}
            />
            :
            <Text>No favs at the moment</Text>
}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 225,
        paddingBottom: 20,
        marginHorizontal: 10,
    },
    favs: {
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        zIndex: 1,
        position: 'relative',
        top: 50,
        left: 20
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
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
});

export default FavScreen
