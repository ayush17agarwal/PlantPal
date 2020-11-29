import React, { Component } from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, ScrollView, View, Text, Image, Button, Aler, TouchableOpacity} from 'react-native';
import { Card, Divider, Input } from 'react-native-elements'
import { color } from 'react-native-reanimated';
import Plant from './Plant';
import SubmitButton from './SubmitButton';
import axios from 'axios';
import t from 'tcomb-form-native';

class Garden extends React.Component {
    state = {
        gardens: []
    }

    componentDidMount() {
        this.refreshGardens()
    }

    refreshGardens() {
        axios.get(`http://localhost:3000/gardens?user=7`)
            .then(res => {
            const gardens = res.data;
            this.setState({ gardens });
        })
    }

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
    
    handleUpdateSubmit = event => {
      event.preventDefault();
      
      const gardenvals = this.update_garden_form.getValue(); 
  
      const garden_to_update = {
        id: gardenvals.garden_id,
        name: gardenvals.garden_name
      };
      
      axios.post(`http://localhost:3000/gardens/change-name`, garden_to_update)
        .then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(
          error => console.log(error),
          Alert.alert(
            "cannot update garden :(",
            "you seem to have entered an invalid garden id. try again!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          )
        )
      
      this.refreshGardens();
    }
    
    render() {
        var nav = this.props.navigation;
        var gardens = this.props.gardens;

        return(
            <ScrollView>
            <View>
            {
                this.state.gardens.map((new_garden) => {
                    return( 
                        <GardenCard garden={new_garden} navComponent={nav}/>
                    )
                }) 
            }
            </View>
            <Divider></Divider>
            <View>
                <Text style={styles.title}>
                    Add a new garden
                </Text>
                <Form type={CreateGarden} ref={c => this.create_garden_form = c}/>
                <SubmitButton
                    title="Submit!"
                    onPress={this.handleCreateSubmit}
                />
            </View>
            <Divider/>
            <View>
                <Text style={styles.title}>
                    {'\n'}Delete a Garden (Enter an ID)
                </Text>
                <Form type={DeleteGarden} ref={c => this.delete_garden_form = c}/>
                <SubmitButton
                    title="Submit!"
                    onPress={this.handleDeleteSubmit}
                />
            </View>
            <View>
                <Text style={styles.title}>
                {'\n'}Update a Garden (Enter an ID and name for the garden)
                </Text> 
                <Form type={UpdateGarden} ref={c => this.update_garden_form = c}/>
                <SubmitButton
                    title="update"
                    onPress={this.handleUpdateSubmit}
                />
            </View>
            </ScrollView>
            
        )
    }
}

const GardenCard = ({garden, navComponent}) => {
    return(
      <Card containerStyle={styles.Card}>
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <Card.Title>{garden.garden_name}</Card.Title> 
          <TouchableOpacity onPress={() => navComponent.navigate('plant')} >
                <Image 
                    style={styles.icons} 
                    source={require('../Assets/right-arrow.png')}
                    />
              </TouchableOpacity>
        </View>        
        <Card.Divider/>
        <Text>Climate: {garden.climate}</Text>
        <Text>ID: {garden.garden_id}</Text>
        {/* <Button
          title="view your plants!"
          onPress={() => navComponent.navigate('plant')}
        /> */}
      </Card>
    ); 
}

// Form components 

const Form = t.form.Form; 

const CreateGarden = t.struct({ 
    garden_name: t.String, 
    climate: t.String
  })
  
  const DeleteGarden = t.struct({
    garden_id: t.Integer
  })
  
  const UpdateGarden = t.struct({
    garden_id: t.Integer,
    garden_name: t.String
  })
  
const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
    },
    Card: {
        backgroundColor: '#7CA784'
    }, 
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    icons: {   
      width: 20,
      height: 20,
      right: 10
    }
});

export default Garden;