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
        const plant1Info = res.data;
        this.setState({ plant1Info });
    })

    // Plant 2
    axios.get(`http://localhost:3000/plants/relationships?plant_id=`+plant2)
      .then(res => {
        const plant2Info = res.data;
        this.setState({ plant2Info });
    })
    console.log(this.state.plant1Info);

    // print(this.state.plant2Info);
  
    this.forceUpdate();
  }
  
  render() {
    var nav = this.props.navigation;
    // console.log(this.state.plant1Info);
    // console.log(this.state.plant2Info);

    return(
      <View style={styles.container}>
        <View style={styles.infoCol}>
            <Text style={styles.heading}> </Text>
            <Text style={styles.text}>
              name{'\n'}
              found{'\n'}
              family{'\n'}
              genus{'\n'}
              species
            </Text>
        </View>
        <View style={styles.col}>
            <Text style={styles.heading}>plant 1</Text>
            <Text style={styles.text}>
              {this.state.plant1Info.common_name}{'\n'}
              {this.state.plant1Info.year}{'\n'}
              {this.state.plant1Info.family}{'\n'}
              {this.state.plant1Info.genus}{'\n'}
              {this.state.plant1Info.scientific_name}
            </Text>
        </View>
        <View style={styles.col}>
            <Text style={styles.heading}>plant 2</Text>
            <Text style={styles.text}>
              {this.state.plant2Info.common_name}{'\n'}
              {this.state.plant2Info.year}{'\n'}
              {this.state.plant2Info.family}{'\n'}
              {this.state.plant2Info.genus}{'\n'}
              {this.state.plant2Info.scientific_name}
          </Text>
        </View>
      </View>
    );
  }

}

export default PlantRelationship2;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // marginHorizontal: 20,
    flexDirection: 'row',
    // alignSelf: 'center',
  },
  infoCol:{
    paddingLeft: 10,
    paddingRight: 20,
  },
  col:{
    // alignSelf: 'center',
    paddingLeft: 5,
    paddingRight: 50
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#86B58F'
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 15,
    lineHeight: 30
  },
});