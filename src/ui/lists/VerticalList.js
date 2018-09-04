import React, { Component } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import RestaurantsVerticalListItem from "../restaurants-list-items/RestaurantsVerticalListItem";
import SearchField from "../fields/SearchField";

export default class VerticalList extends Component {
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
    this.props.listItem ? this.props.listItem : <RestaurantsVerticalListItem id={item.id} title={item.title} />
  );

  render() {
    const searchable = this.props.searchable ? <SearchField /> : null;

    const title = this.props.listTitle ? <Text style={[styles.HighLightTitle, {textAlign: this.props.titlePostion || "left"}]}> {this.props.listTitle} </Text> : null;

    return (
      <View style={styles.container}>
        {searchable}
        {title}
        <View style={[styles.flatListContainer, {alignItems: this.props.alignItems || "flex-start"}]}>
          <FlatList
            data={this.state.list}
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
    padding: 10,
    paddingTop: 5,
    width: '100%'
  },
  flatListContainer: {
    width: '100%',
    marginTop: 10
  },
  HighLightTitle: {
    fontSize: 18,
    fontWeight: "600"
  }
});
