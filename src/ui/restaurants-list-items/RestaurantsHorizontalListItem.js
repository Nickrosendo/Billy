import React from "react"
import { StyleSheet, View, Text, Image } from 'react-native'

export default RestaurantsHorizontalListItem = (props) => {

    const mockSources = [
        require('../../images/mock-logo-1.png'),
        require('../../images/mock-logo-2.png'),
        require('../../images/mock-logo-3.png'),
        require('../../images/mock-logo-4.png'),
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {props.title}</Text>
            <Image style={styles.image} source={mockSources[props.id - 1]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 120,
        marginRight: 12,
        marginLeft: 12,
    },
    title: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500"
    },
    image: {
        flex: 2,
        width: 150,
        height: 100,
        borderRadius: 12
    }
})