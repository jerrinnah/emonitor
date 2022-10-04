import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PostWithImage from '../components/PostWithImage';

const Explore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.tab}></View>
          <View style={styles.tabFocus}>
              <Text style={styles.lgaText}>
                  My LGA
              </Text>
          </View>
          
          <View>
              <PostWithImage/>
              <PostWithImage/>
              <PostWithImage/>
          </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    top: 50,
  },
  title: {
    fontWeight: '700',
  },
  tab: {
    top: '10%',
    height: 50,
    width: '80%',
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  tabFocus: {
    top: '12.2%',
    height: 50,
    width: '40%',
    backgroundColor: 'blue',
    borderRadius: 30,
      position: 'absolute',
      justifyContent: 'center',
    alignItems:'center'
    },
    lgaText: {
        color: 'white',
        fontWeight:'900'
    }
});
