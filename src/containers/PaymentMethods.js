import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'

import { paymentIcon, dolarIcon } from '../images';
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
        <Text style={styles.paymentLabel}> Meios cadastrados</Text>
        <View style={styles.paymentContainer}>
          <View style={{flexDirection: "row"}}>
            <Image style={styles.paymentIcon} source={paymentIcon}/>
            <Text> Cartão de crédito final 1235</Text>
          </View>
          <Button color={"#666"} title={'Editar'} style={styles.editButton}/>
        </View>
        <View style={styles.paymentContainer}>
          <View style={{flexDirection: "row"}}>
            <Image style={styles.paymentIcon} source={paymentIcon}/>
            <Text> Cartão de débito final 2154</Text>
          </View>
          <Button color={"#666"} title={'Editar'} style={styles.editButton}/>
        </View>
        <View style={styles.paymentContainer}>
          <View style={{flexDirection: "row"}}>
            <Image style={styles.paymentIcon} source={dolarIcon}/>
            <Text> Dinheiro</Text>
          </View>
          <Button color={"#666"} title={'Editar'} style={styles.editButton}/>
        </View>
        <View style={styles.addButton}>
          <Button color={"#666"} title={'Adicionar'}/>
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
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    marginTop: 22
  },
  paymentLabel: {
    fontSize: 22,
    color: "#666",
    fontWeight: "500",
    textAlign: "center"
  },
  paymentIcon: {
    width: 24,
    height: 24
  },
  editButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#fff"
  },
  addButton: {
    marginRight: 12,
    marginLeft: 12,
    borderWidth: 1,
    borderColor: "#fff"
  },
  icon: {
    width: 24,
    height: 24,
  }
})
