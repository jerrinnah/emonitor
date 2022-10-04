import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/monitorAppLogo.png'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={logo}/>
          <Text style={styles.continue} onPress={()=> navigation.navigate("SignUp")}>REGISTER</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    logo: {
        top: 20,
        // paddingBottom:50,
    },
    continue: {
        top: 250,
        color: 'grey',
        fontWeight:'bold'
    }
})