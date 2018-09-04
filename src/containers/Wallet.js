import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Button, Image } from 'react-native'

import { paymentIcon, dolarIcon, walletIcon } from '../images';
import MenuHeader from '../ui/menus/MenuHeader';
import VerticalList from '../ui/lists/VerticalList';
import WalletFundsHistoryListItem from '../ui/list-items/WalletFundsHistoryListItem';

export default class Wallet extends Component {
  static navigationOptions = {
    drawerLabel: 'Carteira',
    drawerIcon: () => (
      <Image
        source={walletIcon}
        style={[styles.icon, {tintColor: '#555'}]}
      />
    )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuHeader {...this.props} />
        <Text style={styles.paymentLabel}> Carteira</Text>
        <View style={styles.paymentContainer}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image style={styles.paymentIcon} source={dolarIcon}/>
            <Text> Saldo: </Text>
            <Text style={styles.balanceText}> R$ 100</Text>
          </View>
        </View>
        <View style={styles.addButton}>
          <Button color={"#666"} title={'Adicionar fundos'}/>
        </View>
        {/* <Text style={[styles.paymentLabel, { marginTop: 30 }]}> Histórico de recargas</Text> */}
        <VerticalList alignItems="center" listTitle="Histórico de recargas" titlePostion="center" listItem={<WalletFundsHistoryListItem/>}/>
      </ScrollView>
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
    justifyContent: "center",
    padding: 12,
    marginTop: 22
  },
  balanceText: {
    backgroundColor: "#28a745",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 8,
    color: "#fff"
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
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderColor: "#fff"
  },
  icon: {
    width: 24,
    height: 24,
  }
})
