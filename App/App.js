import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { TabNav } from "./Components/Navigation/TabNav";

import { StyleSheet, ScrollView, View, Text, Image, Button } from 'react-native';
import { Card, Input } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import t from 'tcomb-form-native';

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

const Form = t.form.Form; 

const CreateGarden = t.struct({ 
  garden_name: t.String, 
  climate: t.String
})

const DeleteGarden = t.struct({
  garden_id: t.Integer
})

class App extends React.Component {
  state = {
    gardens: [],
    // newGardenName: ''
  }

  componentDidMount() {
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
  }

  handleDeleteSubmit = event => {
    event.preventDefault();
    
    const gardenvals = this.delete_garden_form.getValue(); 

    const garden_to_delete = {
      garden_id: '424' // gardenvals.garden_id
    };
    
    console.log(garden_to_delete.garden_id); 
    axios.delete(`http://localhost:3000/gardens/remove`, {data: {garden_id: garden_to_delete.garden_id}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(
        error => console.log(error)
      )
  }

  render() {
    return(
      <>
      <Content>
        {
          this.state.gardens.map((garden) => {
            return( 
              <Card containerStyle={styles.Card}>
              <Card.Title>{garden.garden_name}</Card.Title>
              <Card.Divider/>
              <Text>Climate: {garden.climate}</Text>
            </Card>
            )
          })
        }
        <View>
          <Text style={styles.title}>
            Add a new garden
          </Text>
          <Form type={CreateGarden} ref={c => this.create_garden_form = c}/>
          {/* <Input type="text" name="newGardenName" onChange={this.handleChange} />
          <Button title="Submit" onClick={this.handleSubmit}></Button>
          </Form> */}
          <Button
            title="Submit!"
            onPress={this.handleCreateSubmit}
          />
        </View>
        <View>
          <Text style={styles.title}>
            Delete a Garden
          </Text>
          <Form type={DeleteGarden} ref={c => this.delete_garden_form = c}/>
          {/* <Input type="text" name="newGardenName" onChange={this.handleChange} />
          <Button title="Submit" onClick={this.handleSubmit}></Button>
          </Form> */}
          <Button
            title="Submit!"
            onPress={this.handleDeleteSubmit}
          />
        </View>
      </Content>
      </>
    )
  }
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
