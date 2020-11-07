import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Plant from './Plant';

const Garden = ({ navigation }) => {
    // render(){
    return (
        // this.transitionConfig
        <View style={styles.screen}>
        <Text>Garden Screen</Text>
        <Button
        title="Go to Plant"
        onPress={() => navigation.navigate('Plant')}
        />
        </View>
    );
    // }
};

// const transitionConfig: () => {
//     containerStyle: {
//       backgroundColor: 'transparent',
//     }
// }
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    }
});
export default Garden;