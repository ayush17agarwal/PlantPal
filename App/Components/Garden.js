import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class Garden extends Component {
    // static navigationOptions = {
    //     // drawerIcon: ({ tintColor }) => (
    //     //     <Icon name="Garden" style={{ fontSize: 24, color: tintColor }} />
    //     // )
    // }

    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Garden Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Garden;