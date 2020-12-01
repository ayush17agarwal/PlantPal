import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigationBuilder } from '@react-navigation/native';

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
        console.log(res);
        if (res.data && res.data.length > 0) {
          this.state.username = login_info.username;
          this.loginEvent(); 
        }
      }).catch(
        this.loginFailure(), 
        error => console.log(error)
      )
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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.textHeader}>Login!</Text>
          </View>
          <View style={styles.dividerStyle} />
          <Form type={LoginForm} ref={c => this.login_form = c} />
          <SubmitButton
              style={styles.submitButton}
              title="login!"
              onPress={this.handleLoginSubmit}
          />
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
// const LoginPage = () => {
//   return( 
//     <ScrollView style={styles.container}> 
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={styles.textHeader}>Login!</Text>
//         </View>
//         <View style={styles.dividerStyle} />
//         <Form type={LoginForm} ref={c => this.login_form = c} />
//         <SubmitButton
//             style={styles.submitButton}
//             title="login!"
//             onPress={this.handleLoginSubmit}
//         />
//     </ScrollView>
//   )
// }

const Form = t.form.Form; 

const LoginForm = t.struct({ 
    username: t.String, 
    password: t.String
  })

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#7CA784'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
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

export default App;
