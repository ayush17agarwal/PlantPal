import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import t from 'tcomb-form-native';

class SocialPost extends Component {
    
    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>create a new plant post!</Text>
                    <Text style={styles.textSubheader}>share your plants with your friends!</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    
                </View>
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

// Creating a new garden - Form 
const Form = t.form.Form; 

const CreateSocialMediaPost = t.struct({ 
    garden_name: t.String, 
    climate: t.String
})

export default SocialPost;