import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.round} onPress={()=> navigation.navigate("FeedScreen")}>
        <Entypo name="check" size={40} color="white" />
      </TouchableOpacity>
      <View style={styles.regInfo}>
        <Text style={styles.subtitle}>You have been registered </Text>
        <Text style={styles.title}>Successfully</Text>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  round: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  regInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },

  subtitle: {
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
