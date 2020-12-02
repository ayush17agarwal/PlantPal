import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, ScrollView, View, Text, Image, Button, Alert, TouchableOpacity} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { color } from 'react-native-reanimated';

import axios from 'axios';
import t from 'tcomb-form-native';

class Social extends Component {
    state = {
        username: '',
        posts: [],
        likes: []
    }

    componentDidMount() {
        const username = this.props.username;
        this.state.username = username; 
        this.refreshPosts();
    }

    refreshPosts() {
        axios.get(`http://localhost:3000/posts/all`)
            .then(res => {
            const posts = res.data;
            this.setState({ posts });
        });
    }

    likeAPost = (post_id) => {
        const new_post = {
            username: this.state.username,
            post_id: post_id
        }

        axios.post(`http://localhost:3000/posts/like`, new_post)
          .then(res => {
            
            if (res.data.success) {
                // Alert.alert(
                //     "liked ! ",
                //     "keep spreading the love",
                //     [
                //       { text: "OK", onPress: () => console.log("OK Pressed") }
                //     ],
                //     { cancelable: false }
                // );
            }
          })
        // this.forceUpdate();
        this.refreshPosts();
        
    }


    SocialCard = ({username, post, num_likes, nav}) => {
        return(
          <Card containerStyle={styles.card}>
              <View>
                <TouchableOpacity onPress={ () => this.likeAPost(post._id) } > 
                  <Image 
                      style={styles.icons} 
                      source={require('../Assets/love_filled.png')}
                    //   onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } 
                    
                      />
    
                </TouchableOpacity>
            </View>
            <Card.Title style={styles.cardUsername}>@{post.username}</Card.Title>
            <Text style={styles.cardText}>{post.caption}</Text>
            <Text style={styles.cardLikes}>{post.likes.length}</Text>
          </Card>
        ); 
    }

    render(){
        var nav = this.props.navigation;
        var num_likes = '';

        return (
            <ScrollView>
                <View>
                    <View>
                    {
                        this.state.posts.map((new_post, i) => {
                            return( 
                                <>
                                <this.SocialCard username={this.state.username} 
                                            post={new_post} 
                                            navComponent={nav} key={i}/>
                                </>
                            )
                        }) 
                        
                    }
                    </View> 
                </View> 
            </ScrollView>
            
        );
    }
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
    card: {
        backgroundColor: '#B2D1D1',
        borderRadius: 20,
        marginHorizontal: 20
    }, 
    cardUsername: {
        fontSize: 18,
        color: '#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    cardText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 20
    },
    cardLikes: {
        fontSize: 18,
        color: '#FFFFFF',
        position: 'absolute',
        top: 3,
        left: 275
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    icons: {
        position: 'absolute',
        width: 20,
        height: 20,
        top: 5,
        right: 10
    },
    divider: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
});

export default Social;



