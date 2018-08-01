import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { profileIcon } from '../images';

export default class Profile extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: () => (
      <Image
        source={profileIcon}
        style={[styles.icon, {tintColor: '#555'}]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Screen</Text>
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
