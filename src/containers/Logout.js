import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import { logoutIcon } from '../images'

export default class Logout extends Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
    drawerIcon: () => (
        <Image
          source={logoutIcon}
          style={[styles.icon, {tintColor: '#555'}]}
        />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Logout Screen</Text>
        <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Toggle"
        />
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
