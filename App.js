import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUp from './src/screens/SignUp';
import LoginScreen from './src/screens/LoginScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import FeedScreen from './src/screens/FeedScreen';
import AddPost from './src/screens/AddPost';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <TabNavigator/>
    </NavigationContainer>
  );
} 

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
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


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
