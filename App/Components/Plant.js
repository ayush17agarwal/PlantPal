import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';

import axios from 'axios';

class Plant extends React.Component {
    constructor() {
        super(); 
    }

    state = {
        garden_name: '',
        plants: []
    }

    componentDidMount() {
        const garden_name = this.props.route.params.garden_name; 
        this.state.garden_name = garden_name; 
        this.refreshPlants()
    }

    refreshPlants() {
        const garden = {
            garden_name: this.state.garden_name
        };

        axios.get(`http://localhost:3000/plants/all-plants?garden_name=`+ garden.garden_name)
            .then(res => {
            const plants = res.data;
            this.setState({ plants });
        })
    }

    render() {
        var nav = this.props.navigation;
        var plants = this.props.plants;
        var garden_name = this.props.garden_name; 

        return(
            <>
            <ScrollView>
                <View>
                {
                    this.state.plants.map((new_plant) => {
                        return( 
                            <PlantCard plant={new_plant} navComponent={nav} garden_name={garden_name}/>
                        )
                    }) 
                }
                </View>
            </ScrollView>
            </>
        )
    }
}


const PlantCard = ({plant, navComponent, garden_name}) => {
    return(
      <Card containerStyle={styles.Card}>
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <Card.Title>{plant.nickname}</Card.Title> 
          <TouchableOpacity onPress={() => navComponent.navigate('plant information', {plant_id: plant.plant_id, garden_name: garden_name})} >
                <Image 
                    style={styles.icons} 
                    source={require('../Assets/right-arrow.png')}
                    />
              </TouchableOpacity>
        </View>        
        <Card.Title>{plant.nickname}</Card.Title>
        <Card.Divider/>
        <Text>Name: {plant.name}</Text>
        <View>
        <Table>
            <TableWrapper>
            <Row data={["date planted", plant.datePlanted]}></Row>
            <Row data={["last watered", plant.lastWatered]}></Row>
            <Row data={["health", plant.health]}></Row>
            </TableWrapper>
        </Table>
        </View>
    </Card>
    );
}

const styles = StyleSheet.create({
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

// const card_styles = StyleSheet.create({
//     Card: {
//       backgroundColor: '#7CA784'
//     },
//     scrollView: {
//       backgroundColor: '#E8EDF0',
//     },
//     engine: {
//       position: 'absolute',
//       right: 0,
//     },
//     body: {
//       backgroundColor: '#FFFFFF',
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: '#000000',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     //   color: Colors.dark,
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     footer: {
//     //   color: Colors.dark,
//       fontSize: 12,
//       fontWeight: '600',
//       padding: 4,
//       paddingRight: 12,
//       textAlign: 'right',
//     },
//   });

export default Plant;