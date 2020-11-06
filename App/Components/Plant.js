import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements'
import { Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { color } from 'react-native-reanimated';

const Plants = [
    {
      name: "Hydrangea", 
      nickname: "Hydrogen Plant", 
      health: "4",
      datePlanted: "may 20 2001",
      lastWatered: "oct 1 2020"
    }, 
    {
      name: "Hemlock",
      nickname: "Hemlock Holmes", 
      health: "39",
      datePlanted: "may 20 2001",
      lastWatered: "oct 1 2020"
    },
    {
      name: "Sabelle's Plant",
      nickname: "bell pepper", 
      health: "39",
      datePlanted: "may 20 2001",
      lastWatered: "oct 1 2020"
    }
  ]

const Plant = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Plant Screen</Text>
            {/* <Content>
                {
                    Plants.map((plantItem) => {
                    
                        return ( <PlantCard plant={plantItem}/> );
                    })
                }
            </Content> */}
        </View>
    );
}


// const PlantCard = (props) => {
//     return(
//       <Card containerStyle={card_styles.Card}>
//         <Card.Title>{props.plant.nickname}</Card.Title>
//         <Card.Divider/>
//         <Text>Name: {props.plant.name}</Text>
//         <View>
//         <Image
//             source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
//             resizeMode={'contain'} 
//             style={{width: 50, height: 50}}/>
//         </View>
//         <View>
//         <Table>
//             <TableWrapper>
//             <Row data={["date planted", props.plant.datePlanted]}></Row>
//             <Row data={["last watered", props.plant.lastWatered]}></Row>
//             <Row data={["health", props.plant.health]}></Row>
//             </TableWrapper>
//         </Table>
//         </View>
//     </Card>
//     );
// }

const style = StyleSheet.create({
    container: {
        flex: 1
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
  
// export { Plant, PlantCard};
export default Plant;