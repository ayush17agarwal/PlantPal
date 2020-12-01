import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';

class PlantRelationship2 extends Component {
  state = {
    plant1: '',
    plant2: ''
  }

  componentDidMount() {
    plant1 = this.props.plant1;
    plant2 = this.props.plant2; 
  }

  render() {
    var nav = this.props.navigation;
    return(
      <View style={styles.container}>
        {/* <SubmitButton
          style={styles.submitButton}
          title="delete!"
          onPress={this.handleDeleteSubmit}
        /> */}
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