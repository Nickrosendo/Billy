import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import { historyIcon } from '../images';
import MenuHeader from '../ui/menus/MenuHeader';

export default class BillsHistory extends Component {
  static navigationOptions = {
    drawerLabel: 'Histórico de compras',
    drawerIcon: () => (
      <Image
        source={historyIcon}
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
