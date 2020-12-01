import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Settings from './Settings';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import SubmitButton from './SubmitButton';
import axios from 'axios';
import t from 'tcomb-form-native';


class Login extends Component {
    state = {
        firstname: 'ayush',
        username: 'ayush',
        user: [],
        num_plants: [],
        num_gardens: []
    }

    componentDidMount() {
        
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

    
    
    loginEvent() {
        // Do something here to go to the next page? 
    }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader1}>
                        plant
                        <Text style={styles.textHeader2}>pal</Text>
                    </Text>
                </View>
                <View style={styles.dividerStyle} />
                <Form type={LoginForm} ref={c => this.login_form = c} />
                <SubmitButton
                    style={styles.submitButton}
                    title="login!"
                    onPress={this.handleLoginSubmit}
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
    textHeader1: {
        color: '#86B58F',
        fontSize: 35,
        fontFamily: 'Roboto',
        padding: 12
    },
    textHeader2: {
        color: '#B2D1D1',
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

const Form = t.form.Form; 

const LoginForm = t.struct({ 
    username: t.String, 
    password: t.String
  })

export default Login;