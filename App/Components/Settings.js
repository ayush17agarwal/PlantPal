import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';

class Settings extends Component {
    state = {
        username: '',
        password: '********',
        phone_number: '123-456-7890',
        birthday: '2000-01-01',
        user: [],
    }

    componentDidMount() {
        this.state.username = this.props.username;
        this.getUserInfo(); 
    }

    getUserInfo() {
        axios.get(`http://localhost:3000/users/user-info?user=`+this.state.username)
            .then(res => {
            const user = res.data.results[0];
            this.setState({ user });
        })
    }

    render() {
        var user = this.state.user; 
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.tableContainer}>
                    <Text style={styles.col1}>
                            username{'\n\n'}
                            password{'\n\n'}
                            email{'\n\n'}
                            phone number{'\n\n'}
                            birthday
                    </Text>
                    <View style={styles.divider} />
                    <Text style={styles.col2}>
                        {this.state.user.username}{'\n\n'}
                        {this.state.password}{'\n\n'} 
                        {this.state.user.email}{'\n\n'}
                        {this.state.user.phone_number}{'\n\n'}
                        {this.state.user.birthday}
                    </Text>
                </View>
                <Image
                    source={require('../Assets/potted_plant.png')}
                    style={styles.pottedPlant} />
                <Text style={styles.textHeader1}>
                    plant
                    <Text style={styles.textHeader2}>pal</Text>
                </Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
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
        paddingVertical: 100
    },
    pottedPlant: {
        marginTop: 50,
        marginBottom: 30,
        width: 150,
        height: 200,
        alignSelf: 'center'
    },
    textHeader1: {
        color: '#86B58F',
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        padding: 12,
        alignSelf: 'center'
    },
    textHeader2: {
        color: '#B2D1D1',
        fontSize: 22,
        fontFamily: 'Roboto',
        padding: 12
    },
});
export default Settings;