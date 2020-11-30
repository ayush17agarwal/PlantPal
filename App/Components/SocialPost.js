import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import t from 'tcomb-form-native';
import axios from 'axios';

import SubmitButton from './SubmitButton'; 

class SocialPost extends Component {
    state = {
        posts: [],
        username: 'ayush'
    }

    handleCreateSubmit = event => {
        event.preventDefault();
        
        const socialpostvals = this.create_post.getValue(); 
    
        const new_post = {
          username: this.state.username,
          caption: socialpostvals.caption
        };
    
        axios.post(`http://localhost:3000/posts/add`, new_post)
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).catch(
            error => console.log(error)
          )
    }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>create a new plant post!</Text>
                    <Text style={styles.textSubheader}>share your plants with your friends!</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    <Form type={CreateSocialMediaPost} ref={c => this.create_post = c}/>
                    <SubmitButton title="post!" onPress={this.handleCreateSubmit}/>
                    
                </View>
            </ScrollView>
            
        );
    }
}

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.postButtonContainer}>
        <Text style={styles.postText}>{title}</Text>
    </TouchableOpacity>
  );

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
    }, 
    postButtonContainer: {
        elevation: 8,
        backgroundColor: "#769CB9",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    postText: {
        fontSize: 18,
        color: "white",
        fontWeight: "200",
        alignSelf: "center",
        textTransform: "lowercase",
        fontFamily: 'Roboto'
    }
});

// Creating a new garden - Form 
const Form = t.form.Form; 

const CreateSocialMediaPost = t.struct({ 
    caption: t.String
})

export default SocialPost;