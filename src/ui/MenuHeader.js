import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

import { profileIcon, menuIcon } from '../images'

import Logo from './Logo'

export default class MenuHeader extends Component {
  
  render() {   
    return (
      <View style={styles.menuHeader}>
        <TouchableHighlight onPress={ () => this.props.navigation.toggleDrawer()}>
          <Image style={styles.icon} source={menuIcon}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({  
  menuHeader: {
    backgroundColor: '#c1cde5',
    flex: 0.10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  iconContainer: {
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#555'
  }
})
