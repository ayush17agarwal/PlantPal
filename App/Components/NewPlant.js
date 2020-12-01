import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';
// import t from 'tcomb-form-native';

import axios from 'axios';
import SubmitButton from './SubmitButton';

class NewPlant extends Component {
    state = {
        username: 'Megiscool'
    }

    componentDidMount() {
        // this.state.username = this.props.username; 
    }

    handleCreateSubmit = event => {
        event.preventDefault();
        
        const plantvals = this.create_plant_form.getValue(); 
    
        const new_plant = {
          username: this.state.username,
          garden_name: plantvals.garden_name,
          common_name: plantvals.common_name,
          trefle_id: '186403'
        };
    
        axios.post(`http://localhost:3000/plants/add`, new_plant)
          .then(res => {
            console.log(res.data);
            Alert.alert(
                "Success!",
                "You added a new plant to your garden",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
          }).catch(
            error => console.log(error)
          )
        
        this.forceUpdate();
    }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>create a new plant!</Text>
                    <Text style={styles.textSubheader}>add a new plant to your garden</Text>
                </View>
                <View style={styles.dividerStyle} />
                <View>
                    <Form type={NewPlantForm} ref={c => this.create_plant_form = c}/>
                </View>
                <SubmitButton
                    title="Submit!"
                    onPress={this.handleCreateSubmit}
                />
            </ScrollView>
        );
    }
}

var t = require('tcomb-form-native');
var _ = require('lodash');

// clone the default stylesheet
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

//override text color globally
// t.form.Form.stylesheet.textbox.normal.color = '#9FA4A7';
// const formOptions = {
//     fields: {
//         name: {
//           stylesheet: stylesheet // overriding the style of the textbox
//         }
//       }
// }

// Creating a new plant - Form 
const Form = t.form.Form; 

const NewPlantForm = t.struct({ 
    plant_name: t.String, 
    common_name: t.String,
    garden_name: t.String
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
    }
});

export default NewPlant;