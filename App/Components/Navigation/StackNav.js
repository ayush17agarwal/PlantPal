import React from "react";
import { TouchableOpacity, Image, StyleSheet, Button, Icon } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Social from '../Social';
import Garden from "../Garden";
import Plant from '../Plant';
import Search from '../Search';
import User from '../User';
import Settings from '../Settings';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#769CB9",
    },
    headerTintColor: "#FFFFFF",
    headerBackTitle: " ",
};

const GardenStackNav = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Garden" component={Garden} />
            <Stack.Screen name="Plant" component={Plant} />
        </Stack.Navigator>
    );
}

const SocialStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Social" component={Social} />
      </Stack.Navigator>
    );
}

const SearchStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    );
}

const UserStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="User" 
                component={User}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
                            <Image 
                                style={styles.settingsButton} 
                                source={require('../Assets/settings.png')} />
                        </TouchableOpacity>
                    )
                })} 
            />
            <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        width: 25,
        height: 25,
    }
});
export { GardenStackNav, SocialStackNav, SearchStackNav, UserStackNav };