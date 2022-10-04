import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import image from '../../assets/run.jpg';

const PostWithImage = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.userHeader}>
        <View style={styles.avi}></View>
        <Text style={styles.userName}>Bayo Bul</Text>
        <Entypo name="location-pin" color="grey" />
        <Text style={styles.location}>Ajegunle</Text>
        <Text style={styles.time}>2 mins ago</Text>
          </View>
          
      <View style={styles.textContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.textContent}>
          I just saw some armed thugs running into the bush behind our polling
          unit. Please stay alert. I am currently at ajegunle polling unit 18.
          Please send extra security this way if you can.
        </Text>
        <View style={styles.reactionContainer}>
          <View style={styles.reaction}>
            <Entypo name="thumbs-up" />
            <Text style={styles.likes}>253</Text>
          </View>
          <View style={styles.reaction}>
            <Entypo name="chat" />
            <Text style={styles.likes}>253</Text>
          </View>
          <View style={styles.reaction}>
            <Entypo name="bookmark" />
            <Text style={styles.likes}>253</Text>
          </View>
          <View style={styles.reaction}>
            <Entypo name="share" />
            <Text style={styles.likes}>253</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostWithImage;

const styles = StyleSheet.create({
  postContainer: {
    minHeight: 90,
    width: '95%',
    backgroundColor: '#F2F2F2',
    // backgroundColor: 'lightgrey',
    margin: 5,
    borderRadius: 10,
  },
  userName: {},
  avi: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: 'grey',
    margin: 10,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 9,
    color: 'grey',
  },
  time: {
    left: 10,
    fontSize: 9,
    color: 'grey',
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContent: {
    fontSize: 10,
    // width: '89%',
  },
  reactionContainer: {
    flexDirection: 'row',
  },
  reaction: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likes: {
    fontSize: 10,
  },
  image: {
    height: 120,
    width: 300,
    borderRadius: 10,
    margin: 5,
  },
});
