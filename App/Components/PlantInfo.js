import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import SubmitButton from './SubmitButton';

import axios from 'axios';


class PlantInfo extends Component {
    state = {
        plant_id: '',
        plant_info: []
    }

    componentDidMount() {
        const plant_id = this.props.route.params.plant_id; 
        this.state.plant_id = plant_id; 
        this.refreshPlant()
    }

    refreshPlant() { 
        axios.get(`http://localhost:3000/plants?plant_id=`+ this.state.plant_id)
            .then(res => {
            const plant_info = res.data.results[0];
            this.setState({ plant_info });
            const plant_id = plant_info.plant_id; 
            this.setState({plant_id}); 
        })
    }

    handlePlantFertilizeEvent = event => {

    }

    handlePlantWaterEvent = event => {
        event.preventDefault();
        
        const plant_to_water = {
            plant_id: this.state.plant_id
        };
        
        console.log(this.state.plant_id);
        axios.post(`http://localhost:3000/plants/water`, plant_to_water)
            .then(res => {
            Alert.alert(
                "you have successfully watered your plant!",
                "great job (:",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }).catch(err => {
            console.log(err);
        })
        
        this.refreshPlant();
    }

    render(){
        const plant = this.state.plant_info; 
        // console.log(plant.nickname);
        return (
            <ScrollView> 
                <View style={styles.container}>
                    <Text style={styles.textHeader}>{plant.nickname}</Text>
                    <Text style={styles.textSubheader}>
                        type: {plant.common_name}{'\n'} 
                        health: {plant.health+'%'}{'\n'}
                        date planted: {plant.date_planted}{'\n'} 
                        last watered: {plant.date_last_watered}{'\n'}
                    </Text>

                    <Image
                    source={require('../Assets/potted_plant.png')}
                    style={styles.pottedPlant} />
                    <Text>{'\n\n'}</Text>
                    
                    <SubmitButton
                        title="water plant"
                        onPress={this.handlePlantWaterEvent} />

                    <Text style={styles.plant}>
                        {'\n\n'}plant
                        <Text style={styles.pal}>pal</Text>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    textHeader: {
        color: '#356487',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        padding: 12
    },
    textSubheader: {
        color: '#356487',
        fontSize: 18,
        fontFamily: 'Roboto',
        padding: 12
    },
    pottedPlant: {
        marginVertical: 10,
        width: 150,
        height: 200,
        alignSelf: 'center'
    },
    plant: {
        color: '#86B58F',
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: 12,
        alignSelf: 'center'
    },
    pal: {
        color: '#B2D1D1',
        fontSize: 22,
        fontFamily: 'Roboto',
        padding: 12
    },
});

export default PlantInfo;