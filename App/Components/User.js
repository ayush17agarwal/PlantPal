import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import Settings from './Settings';
import SubmitButton from './SubmitButton';
import axios from 'axios';

class User extends Component {
    state = {
        firstname: 'ayush',
        lastname: 'agarwal',
        username: 'ayush',
        user: [],
        num_plants: ["beep", "boop", "bow", "wow", "fake", "plant"],
        num_gardens: ["backyard", "desk"]
    }

    componentDidMount() {
        // this.getNumGardens();
        // this.getNumPlants();
    }

    // getNumGardens() {
    //     axios.get(`http://localhost:3000/gardens/num-gardens/?username=`+this.state.username)
    //         .then(res => {
    //         const num_gardens = res.data; 
    //         this.setState({ num_gardens });
    //     }).catch(
    //         error => console.log(error)
    //     )
    // }

    // getNumPlants() {
    //     axios.get(`http://localhost:3000/plants/num-plants/?username=`+this.state.username)
    //         .then(res => {
    //         const num_plants = res.data;
    //         this.setState({ num_plants });
    //     }).catch(
    //         error => console.log(error)
    //     )
    // }

    render(){
        // var user = this.state.user; 
        // var num_plants = this.state.num_plants;
        // var num_gardens = this.state.num_gardens; 
        console.log(this.state.num_plants);
        return (
            <ScrollView> 
                <View style={styles.container}>
                    <Text style={styles.textHeader}>{this.state.firstname} {this.state.lastname}</Text>
                    {/* <Text style={styles.textSubheader}>@{this.state.username}</Text> */}
                    <View style={styles.circle}>
                    <Image
                        source={require('../Assets/user.png')}
                        style={styles.profile}
                    />
                    </View>
                </View>
                <View style={styles.tableContainer}>
                    <Text style={styles.col1}>
                            username{'\n\n'}
                            about{'\n\n'}
                            gardens{'\n\n'}
                            plants
                    </Text>
                    <View style={styles.divider} />
                    <Text style={styles.col2}>
                        {this.state.username}{'\n\n'}
                        tired cs student{'\n\n'} 
                        {this.state.num_gardens.length}{'\n\n'}
                        {this.state.num_plants.length}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#769CB9',
        paddingTop: 30,
        paddingBottom: 50,
    },
    circle: {
        position: 'absolute',
        borderColor: '#DBE2E5',
        borderWidth: 25,
        borderRadius: 60,
        top: 90
    },
    profile: {
        backgroundColor: '#DBE2E5',
        width: 60,
        height: 60
    },
    textHeader: {
        color: '#FFFFFF',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        padding: 12
    },
    textSubheader: {
        color: '#86B58F',
        fontSize: 20,
        fontFamily: 'Roboto'
    },

    tableContainer: {
        paddingTop: 90,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    col1: {
        marginTop: 10,
        color: '#769CB9',
        fontSize: 15
    },
    col2: {
        marginTop: 10,
        color: '#356487',
        fontSize: 15
    },
    divider: {
        borderRightColor: '#769CB9',
        borderRightWidth: 1,
        marginHorizontal: 30,
        paddingVertical: 75
    },
    
});

export default User;