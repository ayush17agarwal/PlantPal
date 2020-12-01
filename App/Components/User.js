import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Settings from './Settings';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import SubmitButton from './SubmitButton';
import axios from 'axios';

class User extends Component {
    state = {
        firstname: 'ayush',
        username: 'ayush',
        user: [],
        num_plants: [],
        num_gardens: []
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
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>{this.state.firstname}</Text>
                    <Text style={styles.textSubheader}>{this.state.username}</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    <Table>
                        <TableWrapper>
                        <Row data={["username", this.state.username]}></Row>
                        {/* <Row data={["about", user.biography]}></Row> */}
                        {/* <Row data={["gardens", this.state.num_gardens]}></Row> */}
                        {/* <Row data={["plants", this.state.num_plants]}></Row> */}
                        </TableWrapper>
                    </Table>
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

export default User;