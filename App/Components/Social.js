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
                        this.state.posts.map((new_post, i) => {
                            return( 
                                <>
                                <SocialCard username={this.state.username} 
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

const SocialCard = ({username, post, nav}) => {
    return(
      <Card containerStyle={styles.card}>
          <View>
            <TouchableOpacity> 
              <Image 
                  style={styles.icons} 
                  source={require('../Assets/love_outline.png')}
                  onPress={ () => this.setState({ showSoundImg: !this.state.showSoundImg }) } 
          
                  />
            </TouchableOpacity>
        </View>
        <Card.Title style={styles.cardUsername}>@{username}</Card.Title>
        {/* <Card.Divider style={styles.divider}/> */}
        <Text style={styles.cardText}>{post.caption}</Text>
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



