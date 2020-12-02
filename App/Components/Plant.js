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
      <Card containerStyle={styles.card}>
        <View style={styles.cardView}>
          <Card.Title style={styles.cardTitle}>{plant.nickname}</Card.Title> 
          <TouchableOpacity onPress={() => navComponent.navigate('plant information', {plant_id: plant.plant_id, garden_name: garden_name})} >
                <Image 
                    style={styles.icons} 
                    source={require('../Assets/right-arrow.png')}
                    />
              </TouchableOpacity>
        </View>
        <Card.Divider style={styles.divider}/>
        <Text style={styles.cardText}>type: {plant.common_name}</Text>
        <View>
        <Table>
            <TableWrapper>
            <Row data={['date planted', plant.date_planted.substring(0,10)]}></Row>
            <Row data={['last watered', plant.date_last_watered.substring(0,10)]}></Row>
            <Row data={['health', plant.health+'%']}></Row>
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
    card: {
        backgroundColor: '#7CA784',
        borderRadius: 20,
    }, 
    cardView: {
        flexDirection: 'row', 
        justifyContent:'space-between'
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'normal',
        marginLeft: 15,
        marginTop: 5
    },
    cardText: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 20
    },
    icons: {   
        width: 20,
        height: 20,
        right: 10,
        marginTop: 10
    }
});

export default Plant;