import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import { paymentIcon } from '../images';
import MenuHeader from '../ui/menus/MenuHeader';

export default class PaymentMethods extends Component {
  static navigationOptions = {
    drawerLabel: 'Meios de pagamento',
    drawerIcon: () => (
      <Image
        source={paymentIcon}
        style={[styles.icon, {tintColor: '#555'}]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader {...this.props} />
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
