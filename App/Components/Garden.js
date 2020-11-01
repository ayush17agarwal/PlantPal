import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Plant from './Plant';

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