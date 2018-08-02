import React, { Component } from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import HighLightListItem from './HighLightsListItem'

export default class HighLightsList extends Component {
    state = {
        list: [
            {
                id: '1',
                title: "McDonald's"
            },
            {
                id: '2',
                title: "OutBack"
            },
            {
                id: '3',
                title: "Wendy's"
            },
            {
                id: '4',
                title: "StartBucks"
            },
        ]
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({ item }) => (
        <HighLightListItem
            id={item.id}
            title={item.title}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.HighLightTitle}>Mais Populares</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={this.state.list}
                        horizontal={true}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        padding: 10
    },
    flatListContainer: {
        alignItems: "center",
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#aaa",
        paddingTop: 20,
        marginBottom: 50,
    },
    HighLightTitle: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "600",
    }
})