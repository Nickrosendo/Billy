import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Restaurants List Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1
  }
})
