import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Social from './Components/Social';
import Garden from './Components/Garden';
import Search from './Components/Search';
import User from './Components/User';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Garden"
      tabBarOptions={{
        // showIcon: true,
        style: {
          backgroundColor: '#769CB9',
        },
        activeTintColor: '#C8E3F9',
        inactiveTintColor: '#FFFFFF',

      }}
    >
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          tabBarLabel: 'Social',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('./Assets/globe_sky.png')
            : require('./Assets/globe.png')
            return (
                <Image
                    source={image}
                    style={{height:25, width:25}}/>
            )}
        }}/>
      <Tab.Screen
        name="Garden"
        component={Garden}
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('./Assets/leaf_sky.png')
            : require('./Assets/leaf.png')
            return (
                <Image
                    source={image}
                    style={{height:25, width:25}}/>
            )}
        }}/>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('./Assets/loupe_sky.png')
            : require('./Assets/loupe.png')
            return (
                <Image
                    source={image}
                    style={{height:25, width:25}}/>
            )}
        }}/>
        <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('./Assets/user_sky.png')
            : require('./Assets/user.png')
            return (
                <Image
                    source={image}
                    style={{height:25, width:25}}/>
            )}
        }}/>
    </Tab.Navigator>
  );
}
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>

      
  );
};

export default App;
