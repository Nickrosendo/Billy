import React, { Component } from 'react';
import { StyleSheet, ScrollView, Button, Image, Text } from 'react-native';

import MenuHeader from '../ui/menus/MenuHeader';
import RestaurantsHorizontalList from '../ui/restaurants-lists/RestaurantsHorizontalList';
import RestaurantsVerticalList from '../ui/restaurants-lists/RestaurantsVerticalList';
import SearchField from "../ui/fields/SearchField";
import { homeIcon } from '../images';
import Logo from '../ui/logos/Logo';

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Image
        source={homeIcon}
        style={[styles.icon, {tintColor: '#555'}]}
      />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuHeader {...this.props} />
        <Logo/>
        <RestaurantsHorizontalList listTitle="Recomendados"/>
        <SearchField/>
        <RestaurantsVerticalList/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
  icon: {
    width: 24,
    height: 24,
  },
  makeOrderTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500"
  }
})
