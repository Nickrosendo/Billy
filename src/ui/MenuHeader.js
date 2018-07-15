import React, { Component } from 'react'
import { View, StyleSheet, DrawerLayoutAndroid, Text } from 'react-native'

import Logo from './Logo'

export default class MenuHeader extends Component {
  render() {
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
          I'm in the Drawer!
        </Text>
      </View>
    )
    return (
      <View style={styles.menuHeader}>
        <Logo />
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>
              Hello
            </Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>
              World!
            </Text>
          </View>
        </DrawerLayoutAndroid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuHeader: {
    backgroundColor: '#c1cde5',
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
