import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native'

import { profileIcon, menuIcon } from '../../images'

import Logo from '../logos/Logo'

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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  iconContainer: {
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#555'
  }
})
