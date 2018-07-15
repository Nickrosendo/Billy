import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import MenuHeader from './ui/MenuHeader'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuHeader />
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
