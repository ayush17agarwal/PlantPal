import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { Card } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
// import PlantCard from './PlantCard';
import axios from 'axios';

class Plant extends React.Component {
    state = {
        garden_name: '',
        plants: []
    }

    componentDidMount() {
        garden_name = this.props.route.params.garden_name; 
        this.refreshPlants()
    }

    refreshPlants() {
        const garden = {
            garden_name: this.state.garden_name
        };

        axios.get(`http://localhost:3000/plants`, garden)
            .then(res => {
            const plants = res.data;
            this.setState({ plants });
        })
    }

    render() {
        return(
            <>
            <ScrollView>
                <View>
                {
                    this.state.plants.map((new_plant) => {
                        return( 
                            <PlantCard plant={new_plant} navComponent={nav}/>
                        )
                    }) 
                }
                </View>
            </ScrollView>
            </>
        )
    }
}


const PlantCard = ({garden, navComponent}) => {
    return(
      <Card containerStyle={card_styles.Card}>
        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
          <Card.Title>{garden.garden_name}</Card.Title> 
          <TouchableOpacity onPress={() => navComponent.navigate('plant information')} >
                <Image 
                    style={styles.icons} 
                    source={require('../Assets/right-arrow.png')}
                    />
              </TouchableOpacity>
        </View>        
        <Card.Title>{plant.nickname}</Card.Title>
        <Card.Divider/>
        <Text>Name: {plant.name}</Text>
        <View>
        <Image
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            resizeMode={'contain'} 
            style={{width: 50, height: 50}}/>
        </View>
        <View>
        <Table>
            <TableWrapper>
            <Row data={["date planted", plant.datePlanted]}></Row>
            <Row data={["last watered", plant.lastWatered]}></Row>
            <Row data={["health", plant.health]}></Row>
            </TableWrapper>
        </Table>
        </View>
    </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Card: {
        backgroundColor: '#7CA784'
    }, 
    scrollView: {
        backgroundColor: Colors.lighter,
    }
});

// const card_styles = StyleSheet.create({
//     Card: {
//       backgroundColor: '#7CA784'
//     },
//     scrollView: {
//       backgroundColor: '#E8EDF0',
//     },
//     engine: {
//       position: 'absolute',
//       right: 0,
//     },
//     body: {
//       backgroundColor: '#FFFFFF',
//     },
//     sectionContainer: {
//       marginTop: 32,
//       paddingHorizontal: 24,
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: '#000000',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     //   color: Colors.dark,
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     footer: {
//     //   color: Colors.dark,
//       fontSize: 12,
//       fontWeight: '600',
//       padding: 4,
//       paddingRight: 12,
//       textAlign: 'right',
//     },
//   });

export default Plant;