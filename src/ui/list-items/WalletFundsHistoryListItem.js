import React from "react"
import { StyleSheet, View, Text, Image } from 'react-native'

export default WalletFundsHistoryListItem = (props) => {

    return (
      <View style={styles.restaurantContent}>
            <Text style={styles.fundData}> Data: 03/09/2018 </Text>
            <Text style={styles.fundData}> Valor: R$100 </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    fundData: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500"
    },
    restaurantContent: {
        width: '100%',
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: "auto",
        marginRight: "auto"
    }
})