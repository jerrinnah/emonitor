import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUp from './src/screens/SignUp';
import LoginScreen from './src/screens/LoginScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import Navigation from './src/screens/Navigation.jsx/Navigation';
import { Entypo } from '@expo/vector-icons';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login Screen' component={LoginScreen}/>
        <Stack.Screen name='Success Screen' component={SuccessScreen} />
        <Stack.Screen name='Navigation' component={Navigation} />
         
      </Stack.Navigator>
     {/* <TabNavigator/> */}
    </NavigationContainer>
  );
} 

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => (
//   <Tab.Navigator screenOptions={{
//     headerShown:false,
//     // tabBarActiveBackgroundColor: "blue",
//     // tabBarActiveTintColor:'white',
//   }}>

//     <Tab.Screen name='Home' component={FeedScreen} options={{
//       tabBarIcon: ()=> <Entypo name='home' size={30}/>
//     }} />
//     <Tab.Screen name='Add Post' component={AddPost} options={{
//       tabBarIcon:()=> <Entypo name='circle-with-plus' size={30}/>
//     }} />
//     <Tab.Screen name='Explore' component={Explore} options={{
//       tabBarIcon:()=> <Entypo name='add-to-list' size={30}/>
//     }} />
//     <Tab.Screen name='Profile' component={Profile} options={{
//       tabBarIcon:()=> <Entypo name='user' size={30}/>
//     }} />
//   </Tab.Navigator>
// )


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
