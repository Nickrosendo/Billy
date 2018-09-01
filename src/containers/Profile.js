import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import { profileIcon, profileImage } from '../images';
import MenuHeader from '../ui/menus/MenuHeader';

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
        <MenuHeader {...this.props} />
        <View style={styles.profileHeaderContainer}>
          <Image style={styles.profileHeaderImage} source={profileImage}/>
          <Text style={styles.profileHeaderName}> Nicolas Oliverira Rosendo</Text>
        </View>
        <View style={styles.profileContentContainer}>
          <Text style={styles.fieldTitle}> E-mail</Text>
          <Text style={styles.fieldValue}> nicolasrosendo@hotmail.com</Text>
          <Text style={styles.fieldTitle}> Telefone</Text>
          <Text style={styles.fieldValue}> (11) 98738-4952</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1
  },
  profileHeaderContainer: {
    marginTop: 30,
    alignItems: 'center'
  },  
  profileHeaderName: {
    textAlign: 'center',
    fontSize: 22
  },
  profileHeaderImage: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  profileContentContainer: {
    alignItems: 'flex-start',
    padding: 10
  },
  fieldTitle: {
    fontSize: 16,
    color: '#aaa'
  },  
  fieldValue: {
    fontSize: 14,
    color: '#333'
  },  
  icon: {
    width: 24,
    height: 24,
  }
})
