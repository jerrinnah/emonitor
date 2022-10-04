import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const City = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.cityText}>Lagos</Text>
    </TouchableOpacity>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 80,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    margin:2,

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 0.1,
    elevation: 1,
  },
  cityText: {
    padding: 10,
    fontSize: 12,
  },

});
