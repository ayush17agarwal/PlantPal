import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Plant from "./Plant";

const Tab = createBottomTabNavigator();
// class Garden extends Component {
const Garden = ({ navigation }) => {
    // render(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Garden Screen</Text>
        <Button
        title="Go to Plant"
        onPress={() => navigation.navigate('Plant')}
        />
        </View>
    );
    // }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Garden;