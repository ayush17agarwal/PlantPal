import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Settings from './Settings';

// handleClick = ({ navigation }) => {
//     navigation.navigate('Settings')
// }

const User = ({navigation}) => {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>User Screen</Text>
            </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default User;