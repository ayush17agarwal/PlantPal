import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigationBuilder, DefaultTheme } from '@react-navigation/native';

import { StyleSheet, ScrollView, View, Text, Image, Button, Alert} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import t from 'tcomb-form-native';


// Custom Components
import TabNav from "./Components/Navigation/TabNav";
import Login from "./Components/Login";
import SubmitButton from './Components/SubmitButton';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

class App extends React.Component {
  state = {
    gardens: [],
    loginSuccessful: false, 
    username: ''
  }

  componentDidMount() {
    // this.refreshGardens()
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    
    const loginvals = this.login_form.getValue(); 

    const login_info = {
      username: loginvals.username, 
      password: loginvals.password
    };
    
    axios.get('http://localhost:3000/users/signin?user=' + login_info.username + '&passwd=' + login_info.password)
      .then(res => {
        if (res.data.success) {
          var usernameCondition = res.data.results[0].username.toUpperCase() == login_info.username.toUpperCase();

          if (usernameCondition) {
            this.state.username = login_info.username;
            return this.loginEvent(); 
          }
        } else {
          this.loginFailure();
        }
      })
  }

  

  loginEvent() {
    this.state.loginSuccessful = true; 
    this.forceUpdate()
  }

  loginFailure() {
    this.state.loginSuccessful = false; 
    Alert.alert(
      "incorrect login information ",
      "try again",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  LoginPage = () => {
    return( 
      <ScrollView style={styles.container}> 
          <View style={styles.viewContainer}>
            <Text style={styles.textHeader1}>
              plant
              <Text style={styles.textHeader2}>pal</Text>
            </Text>
            <Image
              source={require('./Assets/potted_plant.png')}
              style={styles.pottedPlant} />
          </View>

          <View style={styles.form}>
            <Form 
              type={LoginForm} 
              ref={c => this.login_form = c} />
          </View>

          <SubmitButton
            title="sign in"
            onPress={this.handleLoginSubmit} />
      </ScrollView>
    )
  }

  render() {
    let page; 
    if (this.state.loginSuccessful) {
      page = <TabNav username={this.state.username}/> 
    } else {
      page = <this.LoginPage/>
    }
    return(
      <>
      <NavigationContainer>
        {page}
      </NavigationContainer>
      </>
    )
  }
}

const Form = t.form.Form; 

const LoginForm = t.struct({ 
    username: t.String, 
    password: t.String
  })

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2'
  },
  viewContainer: {
    marginTop: 150,
    marginHorizontal: 50,
    alignContent: 'center'
  },
  textHeader1: {
    color: '#86B58F',
    fontSize: 35,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: 12,
    alignSelf: 'center'
  },
  textHeader2: {
    color: '#B2D1D1',
    fontSize: 35,
    fontFamily: 'Roboto',
    padding: 12
  },
  pottedPlant: {
    marginVertical: 10,
    width: 150,
    height: 200,
    alignSelf: 'center'
  },
  form: {
    marginVertical: 20,
    marginHorizontal: 50,
  }
});

export default App;
