import React from "react"
import { StyleSheet, View, Text, Image } from 'react-native'

export default RestaurantsVerticalListItem = (props) => {

    const mockSources = [
        require('../../images/mock-logo-1.png'),
        require('../../images/mock-logo-2.png'),
        require('../../images/mock-logo-3.png'),
        require('../../images/mock-logo-4.png'),
    ]

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={mockSources[props.id - 1]}/>
            <View style={styles.restaurantContent}>
                <Text style={styles.title}> {props.title}</Text>
                <Text style={styles.contentValue}> 5km</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        marginLeft: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa"
    },
    title: {
        textAlign: "left",
        fontSize: 16,
        fontWeight: "500"
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        resizeMode: Image.resizeMode.stretch,
    },
    restaurantContent: {
        width: '60%',
        height: 80,
        borderWidth: 1,
        borderColor: "#aaa",
        backgroundColor: "#fff",
        padding: 8,
        marginLeft: 15,
        borderRadius: 6
    },
    contentValue: {
        fontSize: 12,
        color: "#888"
    }
})