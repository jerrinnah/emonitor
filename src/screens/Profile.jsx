import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.settingsText}>Settings</Text>
      <View style={styles.layer}>
        <TouchableOpacity style={styles.opt}>
          <Entypo name="bell" size={20} />
          <Text>Notifications</Text>
          <Entypo name="chevron-small-right" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opt}>
          <Entypo name="book" size={20} />
          <Text>Privacy policy</Text>
          <Entypo name="chevron-small-right" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opt}>
          <Entypo name="info" size={20} />
          <Text>Terms of use</Text>
          <Entypo name="chevron-small-right" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opt}>
          <Entypo name="share" size={20} />
          <Text>Share with friends</Text>
          <Entypo name="chevron-small-right" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.opt}>
          <Entypo name="slideshare" size={20} />
          <Text>Help</Text>
          <Entypo name="chevron-small-right" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1713BA',
        justifyContent: 'flex-end',

  },
  layer: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    top: 15,

    alignItems: 'center',
  },
  settingsText: {
    color: 'white',
  },
  opt: {
    height: 60,
    width: '90%',
    backgroundColor: 'transparent',
    top: 50,
    padding: 10,
    flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    marginBottom:20,
  },
});
