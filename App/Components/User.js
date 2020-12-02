import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import Settings from './Settings';
import SubmitButton from './SubmitButton';
import axios from 'axios';

class User extends Component {
    state = {
        username: '',
        user: [],
        num_plants: '',
        num_gardens: '',
        avg_health: ''
    }

    componentDidMount() {
        this.state.username = this.props.username; 
        this.getNumGardens();
        this.getNumPlants();
        this.getUserInfo(); 
    }
    
    getUserInfo() {
        axios.get(`http://localhost:3000/users/user-info?user=`+this.state.username)
            .then(res => {
            const user = res.data.results[0];
            this.setState({ user });
        }).catch(
            error => console.log(error)
        )
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

    findAvgPlantHealth() {
        axios.get(`http://localhost:3000/plants/avg-health?username=`+this.state.username)
            .then(res => {
            const avg_health = res.data.avg_health;
            this.setState({ avg_health });
        }).catch(
            error => console.log(error)
        )
    }
    
    render(){
        var user = this.state.user; 

        return (
            <ScrollView> 
                <View style={styles.container}>
                    <Text style={styles.textHeader}>{user.first_name} {user.last_name}</Text>
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
                        {this.state.num_gardens}{'\n\n'}
                        {this.state.num_plants}
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