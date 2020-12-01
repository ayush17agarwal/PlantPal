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
        num_plants: '',
        num_gardens: ''
    }

    componentDidMount() {
        this.getNumGardens();
        this.getNumPlants();
    }
    
    getUserInfo() {

    }
    getNumGardens() {
        axios.get(`http://localhost:3000/gardens/num-gardens?username=`+this.state.username)
            .then(res => {
            const num_gardens = res.data.num_gardens; 
            this.setState({ num_gardens });
        }).catch(
            error => console.log(error)
        )
    }

    getNumPlants() {
        axios.get(`http://localhost:3000/plants/num-plants?username=`+this.state.username)
            .then(res => {
            const num_plants = res.data.num_plants;
            this.setState({ num_plants });
        }).catch(
            error => console.log(error)
        )
    }

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
                    <Table >
                        <Col data={[
                            'username',
                            'about',
                            'gardens',
                            'plants'
                        ]}/>
                    </Table>
                    <View style={styles.divider} />
                    <Table >
                        <Col data={[
                            this.state.username, 
                            'tired cs student', 
                            this.state.num_gardens,
                            this.state.num_plants
                        ]}/>
                    </Table>
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
        color: '#769CB9',
    },
    divider: {
        borderRightColor: '#769CB9',
        borderRightWidth: 1,
        marginHorizontal: 30,
        paddingVertical: 75
    },
    
});

export default User;