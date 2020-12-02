import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';

import axios from 'axios';

class PlantRelationship2 extends Component {
  state = {
    plant1: '',
    plant2: '',
    plant1Info: [],
    plant2Info: []
  }

  componentDidMount() {
    plant1 = this.props.route.params.plant1;
    plant2 = this.props.route.params.plant2; 
    this.findRelationship(); 
  }

  findRelationship () {
    
    // const gardenvals = this.create_garden_form.getValue(); 

    // const new_garden = {
    //   username: this.state.username,
    //   garden: gardenvals.garden_name,
    //   climate: gardenvals.climate
    // };

    // Plant 1
    axios.get(`http://localhost:3000/plants/relationships?plant_id=`+plant1)
      .then(res => {
        const plant1Info = res;
        this.setState({ plant1Info });
    })

    // Plant 2
    axios.get(`http://localhost:3000/plants/relationships?plant_id=`+plant2)
      .then(res => {
        const plant1Info = res;
        this.setState({ plant2Info });
    })
    console.log(this.state.plant1Info);

    // print(this.state.plant2Info);
  
    this.forceUpdate();
  }
  
  render() {
    var nav = this.props.navigation;

    return(
      <View style={styles.container}>
        <TouchableOpacity
              style={styles.buttons} 
              >
              <Text style={styles.buttonText}>
                  find relationship
              </Text>
          </TouchableOpacity>
      </View>
    );
  }

}

export default PlantRelationship2;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  buttons: {
    backgroundColor: '#769CB9',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 50,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  }
});