import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';

import axios from 'axios';
import t from 'tcomb-form-native';

class Social extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.refreshPosts()
    }

    refreshPosts() {
        axios.get(`http://localhost:3000/gardens?user=7`)
            .then(res => {
            const socialPosts = res.data;
            this.setState({ socialPosts });
        })
    }

    render(){
        var nav = this.props.navigation;

        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                {
                    this.state.posts.map((new_post) => {
                        return( 
                            <SocialCard post={new_post} navComponent={nav}/>
                        )
                    }) 
                }
                </View> 
                <Button
                    title="create a new post on your feed!"
                    onPress={() => nav.navigate('socialPost')}
                />
            </View> 
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Social;


const SocialCard = ({user, post, nav}) => {
    return(
      <Card containerStyle={styles.Card}>
        <Card.Title>{user.username}</Card.Title>
        <Card.Divider/>
        <Image></Image>
        <Text>{post.caption}</Text>
        <Text>Likes: {post.num_likes}</Text>
        <Table>
            <TableWrapper>
            <Row data={["date planted", props.plant.datePlanted]}></Row>
            <Row data={["last watered", props.plant.lastWatered]}></Row>
            <Row data={["health", props.plant.health]}></Row>
            </TableWrapper>
        </Table>
      </Card>
    ); 
}

