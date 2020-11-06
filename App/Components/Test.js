import { React, Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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

  class Test extends Component {
      render (
        return (
            <Content>
                {
                Plants.map((plant) => {
                    return(
                    
                    // <PlantCard plant={this.plant}/>
                        
                    <Card containerStyle={card_styles.Card}>
                        <Card.Title>{plant.nickname}</Card.Title>
                        <Card.Divider/>
                        <Text>Name: {plant.name}</Text>
                        <View>
                        <Image
                            source={'./Assets/leaf.png'}
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
                    )
                })
                }
                </Content>
        );
      );

  }

  export default Test;