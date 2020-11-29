import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button} from 'react-native';

import SubmitButton from './SubmitButton';
import t from 'tcomb-form-native';

class GardenManipulation extends Component {
    handleCreateSubmit = event => {
        event.preventDefault();
        
        const gardenvals = this.create_garden_form.getValue(); 
    
        const new_garden = {
          user_id: "7",
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
        
        this.refreshGardens();
    }
    
    handleDeleteSubmit = event => {
        event.preventDefault();
        
        const gardenvals = this.delete_garden_form.getValue(); 
    
        const garden_to_delete = {
          garden_id: gardenvals.garden_id
        };
        
        axios.delete(`http://localhost:3000/gardens/remove`, {data: {garden_id: garden_to_delete.garden_id}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.refreshGardens(); 
          }).catch(
            error => console.log(error),
            Alert.alert(
              "cannot delete garden :(",
              "you seem to have entered an invalid garden id. try again!",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            )
        ) 
    }

    render(){
        return (
            <ScrollView style={styles.container}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textHeader}>change your gardens!</Text>
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
                    <Text style={styles.textSubheader}>{'\n\n'}delete a garden</Text>
                    <Form type={DeleteGardenForm} ref={c => this.delete_garden_form = c} />
                    <SubmitButton
                        style={styles.submitButton}
                        title="delete!"
                        onPress={this.handleDeleteSubmit}
                    />
                </View>
            </ScrollView>
        );
    }
}

const Form = t.form.Form; 

const DeleteGardenForm = t.struct({ 
    garden_id: t.Integer
}) 

const CreateGardenForm = t.struct({
    garden_name: t.String, 
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
    },
    submitButton: {
        color:'#769CB9'
    }
});

export default GardenManipulation;