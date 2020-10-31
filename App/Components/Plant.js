import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Plant extends Component {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Plant Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Plant;