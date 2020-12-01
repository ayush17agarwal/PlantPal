import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions,  } from 'react-native/Libraries/NewAppScreen';

import {Camera, RNCamera} from 'react-native-camera';

class MysteryPlant extends Component {
    render() {
      return(
        <View style={styles.container}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref
            }}
          />
        </View>
      )
    }

}

const styles = StyleSheet.create({
  screen: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'transparent',
  },
  container: {
      flex: 1
  },
  Card: {
      backgroundColor: '#7CA784'
  }, 
  scrollView: {
      backgroundColor: Colors.lighter,
  },
  icons: {   
    width: 20,
    height: 20,
    right: 10
  }
});

export default MysteryPlant;