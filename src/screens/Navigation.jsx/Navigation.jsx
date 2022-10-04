import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FeedScreen from '../FeedScreen';
import AddPost from '../AddPost';
import Explore from '../Explore';
import Profile from '../Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: 'transparent',
      tabBarActiveTintColor: 'black',
      tabBarInactiveBackgroundColor: 'white',
      tabBarInactiveTintColor: 'lightgrey',
    }}
  >
    <Tab.Screen
      name="Home"
      component={FeedScreen}
      options={{
          tabBarIcon: ({ size, color }) => <Entypo name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Add Post"
      component={AddPost}
      options={{
        tabBarIcon: ({ size, color }) => <Entypo name="circle-with-plus" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarIcon: ({ size, color }) => <Entypo name="add-to-list" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ size, color }) => <Entypo name="user" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default Navigation;

const styles = StyleSheet.create({});
