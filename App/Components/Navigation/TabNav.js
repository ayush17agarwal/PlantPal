import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GardenStackNav, SocialStackNav, SearchStackNav, UserStackNav } from "./StackNav";

const Tab = createBottomTabNavigator();

const TabNav = ({username}) => {
  return (
    <Tab.Navigator
      initialRouteName="garden"
      tabBarOptions={{
        style: { backgroundColor: '#769CB9'},
        activeTintColor: '#C8E3F9',
        inactiveTintColor: '#FFFFFF'}} >
      <Tab.Screen 
        name="social"
        component={() => <SocialStackNav username={username}/>}
        options={{
          tabBarLabel: 'social',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../../Assets/globe_sky.png')
            : require('../../Assets/globe.png')
            return (
              <Image source={image} style={{height:25, width:25}}/> )}}} 
       />
      <Tab.Screen
        name="garden"
        component={() => <GardenStackNav username={username}/>}
        options={{
          tabBarLabel: 'garden',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../../Assets/leaf_sky.png')
            : require('../../Assets/leaf.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}}
       />
      <Tab.Screen
        name="search"
        component={() => <SearchStackNav username={username}/>}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../../Assets/loupe_sky.png')
            : require('../../Assets/loupe.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}}
        />
      <Tab.Screen
        name="user"
        component={() => <UserStackNav username={username}/>}
        options={{
          tabBarLabel: 'user',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../../Assets/user_sky.png')
            : require('../../Assets/user.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}} 
        />
    </Tab.Navigator>
  );
};

export default TabNav;