import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  TextInput
} from "react-native";

import { searchIcon } from "../../images";

export default class SearchField extends Component {
  state = {
    text: "Buscar restaurantes próximos"
  };

  searchRestaurant = () => {
    console.warn("procurou");
  };

  render() {
    return (
      <View style={style.container}>
        <TextInput
          underlineColorAndroid = "transparent"
          onChangeText={text => this.setState({ text })}
          onFocus={ text => this.setState({ text: ''})}
          style={style.text}
          value={this.state.text}
        />
        <TouchableHighlight onPress={() => this.searchRestaurant}>
          <Image style={style.icon} source={searchIcon} />
        </TouchableHighlight>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 8
  },
  text: {
    alignSelf: "stretch",
    textAlign: "left",
    flex: 0.8,
    borderWidth: 0,
    fontFamily: 'Arial',
    color: "#666"
  },
  icon: {
    resizeMode: Image.resizeMode.contain,
    width: 30,
    height: 30,
    tintColor: "#555"
  }
});
