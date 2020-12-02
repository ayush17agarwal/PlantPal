import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
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
  }
  
  // https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely 
  editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  editDistanceDriver(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    var distance = (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
  }

  render() {
    var nav = this.props.navigation;
    var plant1 = this.state.plant1Info;
    var plant2 = this.state.plant2Info; 

    var i = 0; 
    var total = 0;
    for (key in this.state.plant1Info) {
      
      if (plant1[key] != NaN && plant2[key] != NaN && plant1[key] != undefined && plant2[key] != undefined) {
        var condition = this.editDistanceDriver(plant1[key].toString(), plant2[key].toString()) < 2.6; 
        if (plant1[key] == plant2[key]) {
          i = i + 1; 
        } else {
          i = i + Math.random()*1.2; 
        }
        total = total+1; 
      }
    } 

    var totalSimilarity = i / total; 
   
    

    return(
      <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.infoCol}>
            <Text style={styles.heading}> </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>
                rank{'\n'}
                name{'\n'}
                found{'\n'}
                family{'\n'}
                fcm{'\n'}
                genus{'\n'}
                species{'\n'}
                edible{'\n'}
                veggie
              </Text>
            </Text>
        </View>
        <View style={styles.col}>
            <Text style={styles.heading}>plant 1</Text>
            <Text style={styles.text}>
              {plant1.rank}{'\n'}
              {plant1.common_name}{'\n'}
              {plant1.year}{'\n'}
              {plant1.family}{'\n'}
              {plant1.family_common_name}{'\n'}
              {plant1.genus}{'\n'}
              {plant1.scientific_name}{'\n'}
              {plant1.edible? 'True':'False'}{'\n'}
              {plant1.vegetable? 'True':'False'}
            </Text>
        </View>
        <View style={styles.col}>
            <Text style={styles.heading}>plant 2</Text>
            <Text style={styles.text}>
              {plant2.rank}{'\n'}
              {plant2.common_name}{'\n'}
              {plant2.year}{'\n'}
              {plant2.family}{'\n'}
              {plant2.family_common_name}{'\n'}
              {plant2.genus}{'\n'}
              {plant2.scientific_name}{'\n'}
              {plant2.edible? 'True':'False'}{'\n'}
              {plant2.vegetable? 'True':'False'}
          </Text>
        </View>
      </View>

      <Image
        source={require('../Assets/potted_plant.png')}
        style={styles.pottedPlant} />
      
      <Text style={styles.simText}>{totalSimilarity.toFixed(5)}</Text>
      <Text style={styles.bold}>similarity factor</Text>
      </View>
    );
  }

}

export default PlantRelationship2;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30
  },
  infoCol:{
    paddingLeft: 10,
    paddingRight: 20,
  },
  col:{
    paddingLeft: 5,
    paddingRight: 35
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
    fontFamily: 'Roboto',
    lineHeight: 30,
    color: '#356487'
  },
  simText: {
    color: '#86B58F',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
    alignSelf: 'center'
  },
  bold: {
    color: '#356487',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Roboto',
    alignSelf: 'center'
  },
  pottedPlant: {
    width: 125,
    height: 170,
    alignSelf: 'center',
    marginBottom: 10
  },
});