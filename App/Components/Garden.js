import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, ScrollView, View, Text, Image, Button, Aler, TouchableOpacity} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { color } from 'react-native-reanimated';
import {Camera, RNCamera} from 'react-native-camera';

import Plant from './Plant';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import t from 'tcomb-form-native';

class Garden extends React.Component {
    state = {
        gardens: [],
        username: ''
    }

    componentDidMount() {
        const username = 'ayush'; // this.props.username;
        this.state.username = username; 
        // console.log(username);
        this.refreshGardens(); 
    }

    refreshGardens() {
        axios.get(`http://localhost:3000/gardens?username=`+this.state.username)
            .then(res => {
            const gardens = res.data;
            this.setState({ gardens });
        }).catch(
            error => console.log(error)
        )
    }
    
    render() {
        var nav = this.props.navigation;
        var gardens = this.props.gardens;
        
        return(
            <ScrollView>
              <View>
              {
                  this.state.gardens.map((new_garden, i) => {
                      return( 
                          <GardenCard garden={new_garden} navComponent={nav} key={i}/>
                      )
                  }) 
              }
              </View>
            </ScrollView>
            
        )
    }
}

const GardenCard = ({garden, navComponent}) => {
    const thisGardenName = garden.garden_name; 

    return(
      <Card containerStyle={styles.card}>
        <View style={styles.cardView}>
          <Card.Title style={styles.cardTitle}>{garden.garden_name}</Card.Title> 
          <TouchableOpacity onPress={() => navComponent.navigate('plant', {garden_name: thisGardenName})} >
              <Image 
                  style={styles.icons} 
                  source={require('../Assets/right-arrow.png')}
                  />
          </TouchableOpacity>
        </View>        
        <Card.Divider style={styles.divider}/>
        <Text style={styles.cardText}>
            <Image
                source={require('../Assets/location.png')}
                style={styles.image}
              />
            {'\t'}Climate: {garden.climate}
        </Text>
      </Card>
    ); 
}

// Form components 

const Form = t.form.Form; 

const CreateGarden = t.struct({ 
    garden_name: t.String, 
    climate: t.String
  })
  
  const DeleteGarden = t.struct({
    garden_name: t.String
  })
  
  const UpdateGarden = t.struct({
    garden_id: t.Integer,
    garden_name: t.String
  })
  
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
        backgroundColor: '#7CA784',
        borderRadius: 20,
    }, 
    cardView: {
        flexDirection: 'row', 
        justifyContent:'space-between'
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'normal',
        marginLeft: 15,
        marginTop: 5
    },
    cardText: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 20
    },
    image: {
        width: 20,
        height: 20
    },
    divider: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    icons: {   
      width: 20,
      height: 20,
      right: 10,
      marginTop: 10
    }
});

export default Garden;