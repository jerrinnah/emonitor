import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const AddPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Create Post</Text>
      </View>

      <View style={styles.textBox}>
        <View style={styles.imageRow}>
          <TextInput
            style={styles.input}
            placeholder="What is the sitution update?"
          />
        </View>
        <View style={styles.addImage}>
          <Entypo name="images" size={20} color="white" />
        </View>
      </View>
      <View style={styles.post}>
        <View style={styles.postBtn}>
          <Text style={styles.postTitle}>Post</Text>
        </View>
        <View style={styles.miniBtns}>
          <View style={styles.shortBtn}>
            <Text style={styles.postTitle}>LIVE</Text>
          </View>
                  <View style={styles.shortBtn}>
                      <Entypo name='location-pin' size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    height: 30,
    width: '100%',
    // backgroundColor: 'red',
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
  },
  headerTitle: {
    fontSize: '20',
    fontWeight: '700',
  },
  textBox: {
    height: 400,
    width: '100%',
    backgroundColor: 'transparent',
    top: 80,
  },
  input: {
    padding: 10,
  },
  addImage: {
    height: 40,
    width: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    position: 'absolute',
    left: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    //   backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  post: {
    height: 50,
    width: '100%',
    top: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  postTitle: {
    color: 'white',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtn: {
    height: 50,
    width: '55%',
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniBtns: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
      borderRadius: 10,
      justifyContent: 'center',
    alignItems:'center'
    // left:5,
    // padding:10,
  },
});
