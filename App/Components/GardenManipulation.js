import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';

import SubmitButton from './SubmitButton';

import axios from 'axios';
import t from 'tcomb-form-native';

class GardenManipulation extends Component {
    state = {
        username: ''
    }

    componentDidMount() {
        const username = this.props.username;
        this.state.username = username; 
        console.log(username);
    }

    handleCreateSubmit = event => {
        event.preventDefault();
        
        const gardenvals = this.create_garden_form.getValue(); 
    
        const new_garden = {
          username: this.state.username,
          garden: gardenvals.garden_name,
          climate: gardenvals.climate
        };
    
        axios.post(`http://localhost:3000/gardens/create`, new_garden)
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).catch(
            error => console.log(error)
          )
        
        this.forceUpdate();
      }
    
      handleDeleteSubmit = event => {
        event.preventDefault();
        
        const gardenvals = this.delete_garden_form.getValue(); 
    
        const garden_to_delete = {
          garden_name: gardenvals.garden_name
        };
        
        axios.delete(`http://localhost:3000/gardens/remove`, {data: {garden_name: garden_to_delete.garden_name, 
                                                                    username: this.state.username}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.refreshGardens(); 
          }).catch(
            error => console.log(error)
            // Alert.alert(
            //   "cannot delete garden :(",
            //   "you seem to have entered an invalid garden id. try again!",
            //   [
            //     { text: "OK", onPress: () => console.log("OK Pressed") }
            //   ],
            //   { cancelable: false }
            // )
          )
        
        this.forceUpdate();
      }
    
      handleUpdateSubmit = event => {
        event.preventDefault();
        
        const gardenvals = this.delete_garden_form.getValue(); 
    
        const garden_to_update = {
          old_garden_name: gardenvals.garden_name,
          new_garden_name: gardenvals.new_garden_name
        };
        
        axios.post(`http://localhost:3000/gardens/change-name`, {data: {garden_name: garden_to_update.old_garden_name, 
                                                                    new_name: garden_to_update.new_garden_name, 
                                                                    username: this.state.username}})
          .then(res => {
            // console.log(res);
            // console.log(res.data);
            this.refreshGardens(); 
          }).catch(
            error => console.log(error)
            // Alert.alert(
            //   "cannot delete garden :(",
            //   "you seem to have entered an invalid garden id. try again!",
            //   [
            //     { text: "OK", onPress: () => console.log("OK Pressed") }
            //   ],
            //   { cancelable: false }
            // )
          )
      }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>update your gardens!</Text>
                    <Text style={styles.textSubheader}>choose from the options below</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    <Text style={styles.textSubheader}>{'\n'}create a garden</Text>
                    <Form type={CreateGardenForm} ref={c => this.create_garden_form = c} />
                    <SubmitButton
                        style={styles.submitButton}
                        title="create!"
                        onPress={this.handleCreateSubmit}
                    />
                </View>
                <View>
                    <Text style={styles.textSubheader}>{'\n'}delete a garden</Text>
                    <Form type={DeleteGardenForm} ref={c => this.delete_garden_form = c} />
                    <SubmitButton
                        style={styles.submitButton}
                        title="delete!"
                        onPress={this.handleDeleteSubmit}
                    />
                </View>
                <View>
                    <Text style={styles.textSubheader}>{'\n'}rename a garden</Text> 
                    <Form type={UpdateGarden} ref={c => this.update_garden_form = c}/>
                    <SubmitButton
                        title="update!"
                        onPress={this.handleUpdateSubmit}
                    />
                </View>
            </ScrollView>
        );
    }
}

const Form = t.form.Form; 

const DeleteGardenForm = t.struct({ 
    garden_name: t.String
}) 

const CreateGardenForm = t.struct({
    garden_name: t.String, 
    climate: t.String
})

const UpdateGarden = t.struct({
    old_garden_name: t.String,
    new_garden_name: t.String
  })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    textHeader: {
        color: '#86B58F',
        fontSize: 35,
        fontFamily: 'Roboto',
        padding: 12,
        fontWeight: 'bold'
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
    },
    submitButton: {
        color:'#769CB9'
    }
});

export default GardenManipulation;