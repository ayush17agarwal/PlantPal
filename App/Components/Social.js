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
        username: '',
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
        })
    }

    getNumLikes = (post_id) =>{
        // let num_likes = ''; 
        axios.get(`http://localhost:3000/posts/num-likes?post_id=`+post_id)
            .then(res => {
            // console.log(res.data); 
            return res.data; 
        })
    }

    likeAPost = (post_id) => {
        const new_post = {
            username: this.state.username,
            post_id: post_id
        }

        axios.post(`http://localhost:3000/posts/like`, new_post)
          .then(res => {
            
            if (res.data.success) {
                // console.log(res.data); 
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
        this.refreshPosts();
        this.forceUpdate();
    }


    SocialCard = ({username, post, num_likes, nav}) => {
        return(
          <Card containerStyle={styles.card}>
              <View>
                <TouchableOpacity onPress={ () => this.likeAPost(post._id) } > 
                  <Image 
                      style={styles.icons} 
                      source={require('../Assets/love_outline.png')}
                    //   onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } 
                    
                      />
    
                </TouchableOpacity>
            </View>
            <Card.Title style={styles.cardUsername}>@{post.username}</Card.Title>
            {/* <Card.Divider style={styles.divider}/> */}
            <Text style={styles.cardText}>{post.caption}</Text>
            <Text style={styles.cardText}>{num_likes}</Text>
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
                            // console.log(new_post._id);
                            // var num_likes = this.getNumLikes(new_post._id);
                            // console.log(num_likes); 
                            num_likes = this.getNumLikes(new_post._id);
                            // console.log(this.getNumLikes(new_post._id)); 
                            return( 
                                <>
                                <this.SocialCard username={this.state.username} 
                                            post={new_post} 
                                            // num_likes={data}
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



