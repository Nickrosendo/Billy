import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { billyIcon } from '../images'

export default Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={billyIcon} />
      <Text style={styles.logo}>Billy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 22,
    color: '#fff'
  }
})
