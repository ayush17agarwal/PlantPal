import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SubmitButton from './SubmitButton';

class PlantRelationship2 extends Component {
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