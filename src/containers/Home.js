import React, { Component } from 'react';
import { StyleSheet, ScrollView, Button, Image, Text } from 'react-native';

import MenuHeader from '../ui/menus/MenuHeader';
import HorizontalList from '../ui/lists/HorizontalList';
import VerticalList from '../ui/lists/VerticalList';
import SearchField from "../ui/fields/SearchField";
import { homeIcon } from '../images';
import Logo from '../ui/logos/Logo';

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Inicio',
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
        <HorizontalList listTitle="Favoritos"/>
        <SearchField/>
        <VerticalList/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1
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
