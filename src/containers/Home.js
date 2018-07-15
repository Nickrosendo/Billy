import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import MenuHeader from '../ui/MenuHeader'

export default class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader />
        <Button onPress={ () => this.props.navigation.navigate('DrawerOpen')} title={'DrawerOpen'}/>
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
