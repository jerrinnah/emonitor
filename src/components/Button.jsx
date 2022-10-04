import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnText}>REGISTER</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnContainer: {
        height: 39,
        width: '90%',
        backgroundColor: '#1713BA',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 15,

    },
    btnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})