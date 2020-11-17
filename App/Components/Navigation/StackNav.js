import React from "react";
import { TouchableOpacity, Image, StyleSheet, Button, Text, View} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import MenuButton from 'react-native-menu-button'

// Social Screens
import Social from '../Social';
import SocialPost from '../SocialPost'

// Garden Screens 
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

// const DropGardenMenu = ({ navigation }) => {
//     menuGroup= [
//         {key:"0",value:"menu1",text:"menu1"},
//         {key:"1",value:"menu2",text:"menu2"},
//         {key:"2",value:"菜单3",text:"菜单3"},
//         {key:"3",value:"菜单4",text:"菜单4"},
//       ]
//     return (
//         <View>
//         <View style={styles.top}>
//           <MenuButton  
//             buttonStyle={[styles.rightButton]} 
//             menuGroup={menuGroup}
//             onSelect={this._handleOnSelect.bind(this)} 
//             optionSelectedStyle={{backgroundColor:"red"}}
//           />
//         </View>
//         <Text style={styles.text}>{`select ${this.state.selectData}`}</Text>
//       </View>
//     );
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
                        <TouchableOpacity onPress={() => navigation.navigate('settings')} >
                            <Image 
                                style={styles.icons} 
                                source={require('../../Assets/down-arrow.png')} />
                        </TouchableOpacity>
                    )
                })} />
            <Stack.Screen name="plant" component={Plant} />
        </Stack.Navigator>
    );
}

const SocialStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="social" component={Social} />
            <Stack.Screen name="socialPost" component={SocialPost} />
      </Stack.Navigator>
    );
}

const SearchStackNav = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="search" component={Search} />
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