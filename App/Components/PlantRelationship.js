import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import SubmitButton from './SubmitButton';
import DropDownPicker from 'react-native-dropdown-picker';

import axios from 'axios';
import t from 'tcomb-form-native';

let Form = t.form.Form; 

let plant_as_enum = {}; 
let PlantPickerFormOne = t.struct(plant_as_enum); 
let PlantPickerFormTwo = t.struct(plant_as_enum); 

class PlantRelationship extends Component {
  state = {
    username: '',
    plants: [],
    plant1: [],
    plant2: []
  }

  componentDidMount() {
    const username = this.props.username; 
    this.state.username = username; 
    this.refreshPlants(); 
  }

  refreshPlants() {
    axios.get(`http://localhost:3000/plants/all-user-plants?username=`+this.state.username)
        .then(res => {
        const plants = res.data;
        this.setState({ plants });
    }).catch(
        error => console.log(error)
    )
  }

  beginFindRelationship = event => {
    var nav = this.props.navigation;

    // Get the id's for the plants and pass to next screen 
    const plantone = this.plant_picker_form_one.getValue(); 
    const planttwo = this.plant_picker_form_two.getValue(); 
    console.log(plantone); 
    console.log(planttwo.plant); 
    
    this.state.plant1 = plantone; 
    this.state.plant2 = planttwo; 
    // for (var i = 0; i < this.state.plants.length; i++) {
    //   if (this.state.plants[i].common_name == plantone.common_name) {
    //     this.state.plant1 = this.state.plants[i]; 
    //   } else if (this.state.plants[i].common_name == planttwo.common_name) {
    //     this.state.plant2 = this.state.plants[i]; 
    //   }
    // }

    nav.navigate('plant relationship', {plant1: this.state.plant1.plant, plant2: this.state.plant2.plant}); 
  }

  render() {
    var nav = this.props.navigation;

    var user_plants = {};

    for (var i = 0; i < this.state.plants.length; i++) {
      var plant = this.state.plants[i]; 
      var plant_id = plant.plant_id; 
      user_plants[ plant_id ] = plant.common_name;
    }

    var plant_enums = t.enums(user_plants); 
    plant_as_enum = plant_enums; 

    PlantPickerFormOne = t.struct({ 
      plant: plant_enums
    });
    
    PlantPickerFormTwo = t.struct({ 
      plant: plant_enums
    });

    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.textHeader}>
              <Image
                source={require('../Assets/logo.png')}
                style={styles.image}
              />
              plant 1
            </Text>
          </View>
          <Form type={PlantPickerFormOne} ref={c => this.plant_picker_form_one = c} />
          <View style={styles.divider} />

          <View style={styles.heading}>
            <Text style={styles.textHeader}>
              <Image
                source={require('../Assets/logo.png')}
                style={styles.image}
              />
              plant 2
            </Text>
          </View>
          <Form type={PlantPickerFormTwo} ref={c => this.plant_picker_form_two = c} />
          <View style={styles.divider} />
          <TouchableOpacity
              style={styles.buttons} 
              onPress={this.beginFindRelationship}
              >
              <Text style={styles.buttonText}>
                  find relationship
              </Text>
            </TouchableOpacity>
        </View>
         
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  heading: {
    paddingLeft: 35,
    paddingBottom: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  textHeader: {
    color: '#86B58F',
    fontSize: 22,
    fontFamily: 'Roboto',
    paddingLeft: 15,
    fontWeight: 'bold'
  },
  divider: {
      borderBottomColor: '#86B58F',
      borderBottomWidth: 1,
      paddingHorizontal: 165
  },
  buttons: {
    backgroundColor: '#769CB9',
    borderRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontWeight: "200",
    textTransform: "lowercase",
    fontFamily: 'Roboto',
    alignSelf: 'center',
    color: '#FFFFFF',
  }
});

export default PlantRelationship;

