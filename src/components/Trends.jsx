import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Trends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.trendHeader}>
        <View style={styles.avi}></View>
        <Text style={styles.trendTitle}>Voting Materials just arrived</Text>
          </View>
          <View>
          <Text style={styles.trendText}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nam,
        assumenda mollitia saepe neque error sunt tempora praesentium...
      </Text>
          </View>
    </View>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '50%',
    backgroundColor: '#080590',
    borderRadius: 10,
    top: 5,
        padding: 20,
    margin:5,
  },
  avi: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    margin: 2,
    left: 5,
  },
  trendHeader: {
    flexDirection: 'row',
    width: '60%',
    color: 'white',
  },
  trendTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    left: 10,
  },
  trendText: {
    fontSize: 10,
    width: '100%',
    color: 'white',
  },
});
