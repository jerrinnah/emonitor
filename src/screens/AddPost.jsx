import { StyleSheet, Text, TextInput, View,  ActivityIndicator, Pressable, Alert } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config';

const AddPost = () => {
  const [post, setPost] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const collectionRef = collection(db, 'posts');

  const submit = async () => {
    setLoading(true);
    console.log(post);
    await addDoc(collectionRef, { post, username: 'daniel' });
    setLoading(false);
    setPost('');
    Alert.alert('Message', 'Post created!')
  };

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
            onChangeText={(e) => setPost(e)}
          />
        </View>
        <View style={styles.addImage}>
          <Entypo name="images" size={20} color="white" />
        </View>
      </View>
      <View style={styles.post}>
        <Pressable onPress={submit} style={styles.postBtn}>
         {!loading &&  <Text style={styles.postTitle}>Post</Text>}
         {loading && <ActivityIndicator color="white" size="small" />}
        </Pressable>
        <View style={styles.miniBtns}>
          {/* <View style={styles.shortBtn}>
            <Text style={styles.postTitle}>LIVE</Text>
          </View> */}
                  {/* <View style={styles.shortBtn}>
                      <Entypo name='location-pin' size={30} color="white" />
          </View> */}
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
  },
  postTitle: {
    color: 'white',
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtn: {
    height: 50,
    width: '100%',
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
