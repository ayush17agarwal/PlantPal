import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigationBuilder } from '@react-navigation/native';

import { StyleSheet, ScrollView, View, Text, Image, Button, Alert} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import t from 'tcomb-form-native';

// Custom Components
import TabNav from "./Components/Navigation/TabNav";

const Form = t.form.Form; 

const CreateGarden = t.struct({ 
  garden_name: t.String, 
  climate: t.String
})

const DeleteGarden = t.struct({
  garden_id: t.Integer
})

const UpdateGarden = t.struct({
  garden_id: t.Integer,
  garden_name: t.String
})

class App extends React.Component {
  state = {
    gardens: []
  }

  componentDidMount() {
    this.refreshGardens()
  }

  refreshGardens() {
    axios.get(`http://localhost:3000/gardens?user=7`)
      .then(res => {
        const gardens = res.data;
        this.setState({ gardens });
      })
  }

  handleCreateSubmit = event => {
    event.preventDefault();
    
    const gardenvals = this.create_garden_form.getValue(); 

    const new_garden = {
      user_id: "7",
      garden: gardenvals.garden_name,
      climate: gardenvals.climate
    };

    axios.post(`http://localhost:3000/gardens/create`, new_garden)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(
        error => console.log(error)
      )
    
      this.refreshGardens();
  }

  handleDeleteSubmit = event => {
    event.preventDefault();
    
    const gardenvals = this.delete_garden_form.getValue(); 

    const garden_to_delete = {
      garden_id: gardenvals.garden_id
    };
    
    axios.delete(`http://localhost:3000/gardens/remove`, {data: {garden_id: garden_to_delete.garden_id}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(
        error => console.log(error),
        // Alert.alert(
        //   "cannot delete garden :(",
        //   "you seem to have entered an invalid garden id. try again!",
        //   [
        //     { text: "OK", onPress: () => console.log("OK Pressed") }
        //   ],
        //   { cancelable: false }
        // )
      )
    
    this.refreshGardens(); 
  }

  handleUpdateSubmit = event => {
    event.preventDefault();
    
    const gardenvals = this.update_garden_form.getValue(); 

    const garden_to_update = {
      id: gardenvals.garden_id,
      name: gardenvals.garden_name
    };
    
    axios.post(`http://localhost:3000/gardens/change-name`, garden_to_update)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(
        error => console.log(error),
        Alert.alert(
          "cannot update garden :(",
          "you seem to have entered an invalid garden id. try again!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        )
      )
    
    this.refreshGardens();
  }

  render() {
    return(
      <>
      <NavigationContainer>
        <TabNav />

      {/*
      <Content>
        {
          this.state.gardens.map((new_garden) => {
            return( 
              <GardenCard garden={new_garden}/>
            )
          })
        }
        <Divider></Divider>
        <View>
          <Text style={styles.title}>
            Add a new garden
          </Text>
          <Form type={CreateGarden} ref={c => this.create_garden_form = c}/>
          <Button
            title="Submit!"
            onPress={this.handleCreateSubmit}
          />
        </View>
        <Divider/>
        <View>
          <Text style={styles.title}>
            Delete a Garden (Enter an ID)
          </Text>
          <Form type={DeleteGarden} ref={c => this.delete_garden_form = c}/>
          <Button
            title="Submit!"
            onPress={this.handleDeleteSubmit}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Update a Garden (Enter an ID and name for the garden)
          </Text> 
          <Form type={UpdateGarden} ref={c => this.update_garden_form = c}/>
          <Button
            title="update"
            onPress={this.handleUpdateSubmit}
          />
        </View>
      <TabNav></TabNav>
      </Content>
      */}
      </NavigationContainer>
      </>
    )
  }
}

const GardenCard = ({garden}) => {
  return(
    <Card containerStyle={styles.Card}>
      <Card.Title>{garden.garden_name}</Card.Title>
      <Card.Divider/>
      <Text>Climate: {garden.climate}</Text>
      <Text>ID: {garden.garden_id}</Text>
    </Card>
  ); 
}
const PlantCard = (props) => {
  return(
    <Card containerStyle={styles.Card}>
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

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#7CA784'
  },
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
