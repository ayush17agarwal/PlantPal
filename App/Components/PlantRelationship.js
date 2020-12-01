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
            {/* <select>
              {plantChoices}
            </select> */}
            {/* <DropDownPicker
                // items={[
                //     {label: 'USA', value: 'usa'},
                //     {label: 'UK', value: 'uk'},
                //     {label: 'France', value: 'france'},
                // ]}
                items={
                  this.state.plants.map((plant, i) => {
                    return( 
                        {label: plant.name, value: 'hi'}
                    )
                }) 
                }
                defaultValue={this.state.plant1}
                containerStyle={{height: 40}}
                style={{backgroundColor: 'white'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: 'white'}}
                onChangeItem={item => this.setState({
                    plant1: item.value
                })} >
            </DropDownPicker> */}
          </View>
          <View style={styles.dividerStyle} />

          <View style={styles.heading}>
          <Text style={styles.textHeader}>
              <Image
                source={require('../Assets/logo.png')}
                style={styles.image}
              />
              plant 2
            </Text>
          </View>
          <View style={styles.dividerStyle} />
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
  dividerStyle: {
      borderBottomColor: '#86B58F',
      borderBottomWidth: 1,
      paddingHorizontal: 165
  },
  buttons: {
    backgroundColor: '#769CB9',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
  }
});