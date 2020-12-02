import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import t from 'tcomb-form-native';
import { Card, Divider, Input } from 'react-native-elements'

import axios from 'axios';
import SubmitButton from './SubmitButton';

let Form = t.form.Form; 

let gardens_as_enum = {};
let NewPlantForm = t.struct(gardens_as_enum); 

class NewPlant extends Component {
    state = {
        username: '',
        plants: [], 
        gardens: [],
        garden_name: '',
        nickname: ''
    }

    componentDidMount() {
        this.state.username = this.props.username; 
        this.getAllGardens(); 
    }

    handleCreateSubmit = (plant) => {
        // event.preventDefault();
        
        // console.log(plant);
        // const plantvals = this.find_new_plant_form.getValue(); 
        
        // console.log(this.state.garden_name); 
        const new_plant = {
          garden_name: this.state.garden_name,
          username: this.state.username,
          common_name: plant.common_name,
          trefle_id: plant.id,
          nickname: this.state.nickname
        };

        axios.post(`http://localhost:3000/plants/add`, new_plant)
          .then(res => {
            Alert.alert(
                "Success!",
                "You added a new plant to your garden",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
          })
        
        this.props.navigation.navigate('garden'); 
        this.forceUpdate();
    }

    findPossiblePlants = event => {
        event.preventDefault(); 

        const formvals = this.find_new_plant_form.getValue(); 
        
        this.state.garden_name = formvals.garden;
        this.state.nickname = formvals.nickname; 

        axios.get(`http://localhost:3000/plants/search?common=`+formvals.common_name)
            .then(res => {
            const plants = res.data.results.data;
            this.setState({ plants });
        }).catch(
            error => console.log(error)
        )

        this.forceUpdate();
    }

    getAllGardens() {
        axios.get(`http://localhost:3000/gardens?username=`+this.state.username)
            .then(res => {
            const gardens = res.data.results;
            this.setState({ gardens });
        })
    }

    PlantCard = ({plant}) => {
        return(
          <Card containerStyle={styles.card}>
            <View style={styles.cardView}>
              <Card.Title style={styles.cardTitle}>{plant.common_name}</Card.Title> 
              <TouchableOpacity onPress={() => this.handleCreateSubmit(plant)} >
                    <Image 
                        style={styles.icons} 
                        source={require('../Assets/plus.png')}
                        />
                  </TouchableOpacity>
            </View>
        </Card>
        );
    }
    
    render(){
        var nav = this.props.navigation; 

        var user_gardens = {};

        for (var i = 0; i < this.state.gardens.length; i++) {
            var garden = this.state.gardens[i]; 
            user_gardens[ garden.garden_name ] = garden.garden_name;
        }

        var gardens_as_enum = t.enums(user_gardens); 
        
        NewPlantForm = t.struct({
            common_name: t.String,
            nickname: t.String,
            garden: gardens_as_enum
        }); 

        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>create a new plant!</Text>
                    <Text style={styles.textSubheader}>add a new plant to your garden</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    <Form 
                        type={NewPlantForm} 
                        ref={c => this.find_new_plant_form = c}
                        options={options}/>
                </View>
                <Text>{'\n'}</Text>
                <SubmitButton
                    title="find plants!"
                    onPress={this.findPossiblePlants}
                />
                <View>
                    {
                        this.state.plants.map((new_plant, i) => {
                            return( 
                                <this.PlantCard plant={new_plant}/>
                            )
                        }) 
                    }
                </View>
            </ScrollView>
        );
    }
}

// var t = require('tcomb-form-native');
var _ = require('lodash');
this.options = {
    auto: 'placeholders',
    fields: {
        common_name: {
            placeholder: 'common name',
            autoCapitalize: 'none',
            autoCorrect: false,
        },
        nickname: {
            placeholder: 'nickname',
            autoCapitalize: 'none',
            autoCorrect: false,
        },
        garden: {
            placeholder: 'garden',
            autoCapitalize: 'none',
            autoCorrect: false,
        }
    },
  };

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    textHeader: {
        color: '#86B58F',
        fontSize: 35,
        fontFamily: 'Roboto',
        padding: 12,
        fontWeight: 'bold'
    },
    dividerStyle: {
        borderBottomColor: '#86B58F',
        borderBottomWidth: 2,
        padding: 11,
        marginBottom: 20,
    },
    textSubheader: {
        color: '#86B58F',
        fontSize: 20,
        fontFamily: 'Roboto'
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
    icons: {
        width: 20,
        height: 20
    }
});

export default NewPlant;