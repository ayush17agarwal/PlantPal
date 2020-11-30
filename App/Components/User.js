import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Settings from './Settings';

import SubmitButton from './SubmitButton';

class User extends Component {
    state = {
        firstname: 'ayush',
        username: '@' + 'aagarwal2'
    }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>{this.state.firstname}</Text>
                    <Text style={styles.textSubheader}>{this.state.username}</Text>
                </View>
                <View style={styles.dividerStyle} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    textHeader: {
        color: '#86B58F',
        fontSize: 35,
        fontFamily: 'Roboto',
        padding: 12
    },
    dividerStyle: {
        borderBottomColor: '#86B58F',
        borderBottomWidth: 2,
        padding: 11
    },
    textSubheader: {
        color: '#86B58F',
        fontSize: 20,
        fontFamily: 'Roboto'
    }
});

export default User;