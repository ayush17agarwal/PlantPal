import React from "react";
import { TouchableOpacity, Image, StyleSheet, Button, Text, View} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import MenuButton from 'react-native-menu-button'

// Social Screens
import Social from '../Social';
import SocialPost from '../SocialPost'

// Garden Screens 
import Garden from "../Garden";
import GardenManipulation from "../GardenManipulation"
import Plant from '../Plant';
import NewPlant from "../NewPlant"
import PlantInfo from "../PlantInfo"

// Identification Screens
import MysteryPlant from '../MysteryPlant';
import PlantRelationship from '../PlantRelationship';
import PlantRelationship2 from '../PlantRelationship2';

// Other 
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

// const SignInNav = () => {
//     return(

//     )
// }

const GardenStackNav = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="garden" 
                component={Garden}
                options={({ navigation }) => ({
                    headerRight: () => (
                        // <TouchableOpacity onPress={this.DropGardenMenu} >
                        <TouchableOpacity onPress={() => navigation.navigate('change gardens')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/right-arrow.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen name='change gardens' component={GardenManipulation}/>
            <Stack.Screen 
                name="plant" 
                component={Plant} 
                options={({ navigation }) => ({
                    headerRight: () => (
                        // <TouchableOpacity onPress={this.DropGardenMenu} >
                        <TouchableOpacity onPress={() => navigation.navigate('add a new plant')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/plus.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen name="add a new plant" component={NewPlant} />
            <Stack.Screen name="plant information" component={PlantInfo} />
        </Stack.Navigator>
    );
}

const SocialStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="social" 
                component={Social}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('create post')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/plus.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen 
                name="create post" 
                component={SocialPost} 
                />
      </Stack.Navigator>
    );
}

const SearchStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="identify mystery plant" component={MysteryPlant} />
            <Stack.Screen name="identify plant relationship" component={PlantRelationship} />
            <Stack.Screen name="plant relationship" component={PlantRelationship2} />
      </Stack.Navigator>
    );
}

const UserStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="user" 
                component={User}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('settings')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/settings.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    icons: {
        width: 25,
        height: 25,
        right: 10,
    },
    top:{
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        top: 0,
        height: 64,
        right: 0,
        left: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: '#828287',
        position: 'relative',
      },
      text:{
        marginTop:20,
      },
      rightButton: {
        width: 100,
        height: 37,
        position: 'absolute',
        bottom: 8,
        right: 2,
        padding: 8
      },
});
export { GardenStackNav, SocialStackNav, SearchStackNav, UserStackNav };