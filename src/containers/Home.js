import React, { Component } from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'

import MenuHeader from '../ui/MenuHeader'
import { homeIcon } from '../images';
import Logo from '../ui/Logo';

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
      <View style={styles.container}>
        <MenuHeader {...this.props} />
        <Logo/>
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
