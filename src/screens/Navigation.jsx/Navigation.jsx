import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeedScreen from '../FeedScreen';
import AddPost from '../AddPost';
import Explore from '../Explore';
import Profile from '../Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
  
const Navigation = () => (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      // tabBarActiveBackgroundColor: "blue",
      // tabBarActiveTintColor:'white',
    }}>
  
      <Tab.Screen name='Home' component={FeedScreen} options={{
        tabBarIcon: ()=> <Entypo name='home' size={30}/>
      }} />
      <Tab.Screen name='Add Post' component={AddPost} options={{
        tabBarIcon:()=> <Entypo name='circle-with-plus' size={30}/>
      }} />
      <Tab.Screen name='Explore' component={Explore} options={{
        tabBarIcon:()=> <Entypo name='add-to-list' size={30}/>
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon:()=> <Entypo name='user' size={30}/>
      }} />
    </Tab.Navigator>
  )

export default Navigation

const styles = StyleSheet.create({})