import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';

import t from 'tcomb-form-native';

class PlantRelationship extends Component {
    render() {
      var nav = this.props.navigation;
      return(
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
              onPress={() => nav.navigate('plant relationship')}
              >
              <Text style={styles.buttonText}>
                  find relationship
              </Text>
            </TouchableOpacity>
        </View>
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