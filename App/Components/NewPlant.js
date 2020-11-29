import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';
// import t from 'tcomb-form-native';

import SubmitButton from './SubmitButton';

class NewPlant extends Component {
    handleCreateSubmit = event => {
        event.preventDefault();
        
        const plantvals = this.create_plant_form.getValue(); 
    
        const new_plant = {
          user_id: "7",
          garden: garden.garden_name,
          plant_name: plantvals.plant_name,
          plant_type: plantvals.plant_type,
          climate: garden.climate 
        };
    
        axios.post(`http://localhost:3000/plant/create`, new_plant)
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).catch(
            error => console.log(error)
          )
        
        this.refreshGardens();
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
                    <Form type={NewPlantForm} options={formOptions} ref={c => this.create_plant_form = c}/>
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
t.form.Form.stylesheet.textbox.normal.color = '#9FA4A7';
const formOptions = {
    fields: {
        name: {
          stylesheet: stylesheet // overriding the style of the textbox
        }
      }
}

// Creating a new plant - Form 
const Form = t.form.Form; 

const NewPlantForm = t.struct({ 
    plant_name: t.String, 
    plant_type: t.String,
    climate: t.String
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