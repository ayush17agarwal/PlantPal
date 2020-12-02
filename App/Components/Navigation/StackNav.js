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

const GardenStackNav = ({username}) => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="garden" 
                component={props => <Garden {...props} username={username}/>}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('update gardens')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/right-arrow.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen 
                name='update gardens' 
                component={props => <GardenManipulation {...props} username={username}/>}/>
            <Stack.Screen 
                name="plant" 
                component={props => <Plant {...props} username={username}/>} 
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('add a new plant')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/plus.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen 
                name="add a new plant" 
                component={props => <NewPlant {...props} username={username}/>} />
            <Stack.Screen 
                name="plant information" 
                component={props => <PlantInfo {...props} username={username}/>} />
        </Stack.Navigator>
    );
}

const SocialStackNav = ({username}) => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="social" 
                component={props => <Social {...props} username={username}/>}
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
                component={props => <SocialPost {...props} username={username}/>} 
                />
      </Stack.Navigator>
    );
}

const SearchStackNav = ({username}) => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="search" 
                component={props => <Search {...props} username={username}/>} />
            <Stack.Screen name="identify plant relationship" 
                component={props => <PlantRelationship {...props} username={username}/>} />
            <Stack.Screen name="plant relationship" 
                component={PlantRelationship2} />
      </Stack.Navigator>
    );
}

const UserStackNav = ({username}) => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name=" " 
                component={props => <User {...props} username={username}/>}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('settings')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/settings.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen name="settings" component={props => <Settings {...props} username={username}/>} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    icons: {
        width: 20,
        height: 20,
        right: 20,
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
        fontSize: 18
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