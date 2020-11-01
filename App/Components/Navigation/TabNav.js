import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GardenStackNav, SocialStackNav, SearchStackNav, UserStackNav } from "./StackNav";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Garden"
      tabBarOptions={{
        style: { backgroundColor: '#769CB9'},
        activeTintColor: '#C8E3F9',
        inactiveTintColor: '#FFFFFF' }} >
      <Tab.Screen
        name="Social"
        component={SocialStackNav}
        options={{
          tabBarLabel: 'Social',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../Assets/globe_sky.png')
            : require('../Assets/globe.png')
            return (
              <Image source={image} style={{height:25, width:25}}/> )}}} />
      <Tab.Screen
        name="Garden"
        component={GardenStackNav}
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../Assets/leaf_sky.png')
            : require('../Assets/leaf.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}} />
      <Tab.Screen
        name="Search"
        component={SearchStackNav}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../Assets/loupe_sky.png')
            : require('../Assets/loupe.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}} />
      <Tab.Screen
        name="User"
        component={UserStackNav}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ focused }) => {
            const image = focused
            ? require('../Assets/user_sky.png')
            : require('../Assets/user.png')
            return ( <Image source={image} style={{height:25, width:25}}/> )}}} />
    </Tab.Navigator>
  );
};

export default TabNav;