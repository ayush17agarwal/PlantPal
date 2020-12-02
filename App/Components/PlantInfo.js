import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
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
        // event.preventDefault();
        
        // const plant_to_water = {
        //     plant_id: this.state.plant_id
        // };
        
        // axios.post(`http://localhost:3000/plants/water`, plant_to_water)
        //     .then(res => {
        //     // console.log(res);
        //     console.log(res.data);
        //     Alert.alert(
        //         "you have successfully watered your plant!",
        //         "great job (:",
        //         [
        //             { text: "OK", onPress: () => console.log("OK Pressed") }
        //         ],
        //         { cancelable: false }
        //         );
        // })
        
        // this.refreshPlant();
    }

    render(){
        const plant = this.state.plant_info; 
        console.log(plant.nickname);
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
                    
                    <SubmitButton
                        title="water plant"
                        onPress={this.handlePlantWaterEvent} />
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
});

export default PlantInfo;