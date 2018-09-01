import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import RestaurantsHorizontalListItem from "../restaurants-list-items/RestaurantsHorizontalListItem";
import SearchField from "../fields/SearchField";

export default class RestaurantsHorizontalList extends Component {
  state = {
    list: [
      {
        id: "1",
        title: "McDonald's"
      },
      {
        id: "2",
        title: "OutBack"
      },
      {
        id: "3",
        title: "Wendy's"
      },
      {
        id: "4",
        title: "StarBucks"
      }
    ]
  };

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <RestaurantsHorizontalListItem id={item.id} title={item.title} />
  );

  render() {
    const searchable = this.props.searchable ? <SearchField /> : null;

    const title = this.props.listTitle ? <Text style={styles.HighLightTitle}> {this.props.listTitle} </Text> : null;

    return (
      <View style={styles.container}>
        {searchable}
        {title}
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.state.list}
            horizontal={true}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        </View>
      </View>
    );
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
    marginBottom: 50
  },
  HighLightTitle: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "600"
  }
});
