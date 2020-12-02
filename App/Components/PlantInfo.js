import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';
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
        // ROUTE IS WRONG ??? 
        axios.get(`http://localhost:3000/plants?plant_id=`+ this.state.plant_id)
            .then(res => {
            const plant_info = res.data;
            this.setState({ plant_info });
        })
    }

    handlePlantFertilizeEvent = event => {

    }

    handlePlantWaterEvent = event => {
        event.preventDefault();
    
        const garden_to_update = {
            plant_id: this.state.plant_id
        };
        
        axios.post(`http://localhost:3000/plants/water`, plant_to_water)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(
                error => console.log(error)
            )
        
        this.refreshPlant();
    }

    render(){
        const plant = this.state.plant_info; 
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>{plant.nickname}</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View> 
                    <Table>
                        <TableWrapper>
                        <Row data={["plant type", plant.common_name]}></Row>
                        <Row data={["date planted", plant.date_planted]}></Row>
                        <Row data={["last watered", plant.date_last_watered]}></Row>
                        <Row data={["last fertilized", plant.last_fertilized]}></Row>
                        <Row data={["health", plant.health]}></Row>
                        <Row data={["genus", plant.genus]}></Row>
                        <Row data={["species", plant.species]}></Row>
                        </TableWrapper>
                    </Table>
                </View>
                <SubmitButton
                    title="water plant"
                    onPress={this.handlePlantWaterEvent}
                />
                <SubmitButton
                    title="fertilize plant"
                    onPress={this.handlePlantFertilizeEvent}
                />
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
        color: '#86B58F',
        fontSize: 35,
        fontFamily: 'Roboto',
        padding: 12
    },
    dividerStyle: {
        borderBottomColor: '#86B58F',
        borderBottomWidth: 2,
        padding: 11
    },
    textSubheader: {
        color: '#86B58F',
        fontSize: 20,
        fontFamily: 'Roboto'
    }
});

export default PlantInfo;