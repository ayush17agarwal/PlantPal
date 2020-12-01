import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'

import SubmitButton from './SubmitButton';
import DropDownPicker from 'react-native-dropdown-picker';

import t from 'tcomb-form-native';
import axios from 'axios';

class PlantRelationship extends Component {
  state = {
    username: '',
    plants: [],
    plant1: ''
  }

  componentDidMount() {
    const username = 'ayush'; // this.props.route.params.username; 
    this.state.username = username; 
    this.refreshPlants(); 
  }

  refreshPlants() {
    axios.get(`http://localhost:3000//all-user-plants?username=`+this.state.username)
        .then(res => {
        const plants = res.data;
        console.log(plants);
        this.setState({ plants });
    }).catch(
        error => console.log(error)
    )
  }

  render() {
    var nav = this.props.navigation;

    let plantChoices = this.state.plants.map((plant) =>
        <option key={plant}>{plant}</option>
    );

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
          <View style={styles.divider} />
          <TouchableOpacity
              style={styles.buttons} 
              onPress={() => nav.navigate('plant relationship', {plant1: this.state.plant1, plant2: this.state.plant2})}
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

export default PlantRelationship;

const Form = t.form.Form; 
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