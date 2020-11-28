import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import t from 'tcomb-form-native';

class NewPlant extends Component {
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
            </ScrollView>
        );
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

const formOptions = {

}
export default NewPlant;