import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { configIcon } from '../images';
import MenuHeader from '../ui/menus/MenuHeader';

export default class Settings extends Component {
  static navigationOptions = {
    drawerLabel: 'Configurações',
    drawerIcon: () => (
      <Image
        source={configIcon}
        style={[styles.icon, {tintColor: '#555'}]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader {...this.props} />
      </View>
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
  }
})
