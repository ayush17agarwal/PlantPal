import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from "./Components/Navigation/TabNav";
// import React, {Component} from 'react';
// import NavBar from './Components/HeaderBar'
// COMPONENTS


// export default class App extends Component {
//  render() {
//    return (
//      <HeaderBar/>
//    );
//  }
// }


import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// import { PlantCard } from './Components/PlantCard'
import { color } from 'react-native-reanimated';


const Plants = [
  {
    name: "Hydrangea", 
    nickname: "Hydrogen Plant", 
    health: "4",
    datePlanted: "may 20 2001",
    lastWatered: "oct 1 2020"
  }, 
  {
    name: "Hemlock",
    nickname: "Hemlock Holmes", 
    health: "39",
    datePlanted: "may 20 2001",
    lastWatered: "oct 1 2020"
  },
  {
    name: "Sabelle's Plant",
    nickname: "bell pepper", 
    health: "39",
    datePlanted: "may 20 2001",
    lastWatered: "oct 1 2020"
  }
]

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <TabNav/>
      <Content>
        {
          Plants.map((plantItem) => {
        
            return ( <PlantCard plant={plantItem}/> );
          })
        }
        </Content>
    </NavigationContainer>     
  );
};

const PlantCard = (props) => {
  return(
    <Card containerStyle={card_styles.Card}>
      <Card.Title>{props.plant.nickname}</Card.Title>
      <Card.Divider/>
      <Text>Name: {props.plant.name}</Text>
      <View>
      <Image
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          resizeMode={'contain'} 
          style={{width: 50, height: 50}}/>
      </View>
      <View>
      <Table>
          <TableWrapper>
          <Row data={["date planted", props.plant.datePlanted]}></Row>
          <Row data={["last watered", props.plant.lastWatered]}></Row>
          <Row data={["health", props.plant.health]}></Row>
          </TableWrapper>
      </Table>
      </View>
  </Card>
  );
}

const card_styles = StyleSheet.create({
  Card: {
    backgroundColor: '#7CA784'
  }
});
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
