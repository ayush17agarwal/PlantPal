import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, ScrollView, View, Text, Image, Button, Aler, TouchableOpacity} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { color } from 'react-native-reanimated';

import axios from 'axios';
import t from 'tcomb-form-native';

class Social extends Component {
    state = {
        posts: [],
        username: ''
    }

    componentDidMount() {
        const username = "ayush";
        this.state.username = username; 
        this.refreshPosts()
    }

    refreshPosts() {
        axios.get(`http://localhost:3000/posts?username=`+this.state.username)
            .then(res => {
            const posts = res.data;
            console.log(posts);
            this.setState({ posts });
        }).catch(
            error => console.log(error)
        )
    }

    render(){
        var nav = this.props.navigation;

        return (
            <ScrollView>
                <View>
                    <View>
                    {
                        this.state.posts.map((new_post) => {
                            return( 
                                <>
                                <SocialCard username={this.state.username} post={new_post} navComponent={nav}/>
                                </>
                            )
                        }) 
                        
                    }
                    </View> 
                    
                    {/* <Button
                        title="create a new post on your feed!"
                        onPress={() => nav.navigate('socialPost')}
                    /> */}
                </View> 
            </ScrollView>
            
        );
    }
}

const SocialCard = ({username, post, nav}) => {
    return(
      <Card containerStyle={styles.Card}>
        <Card.Title>@{username}</Card.Title>
        <Card.Divider/>
        <Text>{post.caption}</Text>
        <View>
            <TouchableOpacity> 
              <Image 
                  style={styles.icons} 
                  source={require('../Assets/love_outline.png')}
                  />
          </TouchableOpacity>
        </View>
      </Card>
    ); 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1
    },
    Card: {
        backgroundColor: '#B2D1D1'
    }, 
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    icons: {   
      width: 20,
      height: 20,
      right: 10
    },
    Divider: {
        padding: 32
    }
});

export default Social;



