import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, StatusBar } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const PlantCard = ({plant}) => (
    <Card containerStyle={card_styles.Card}>
        <Card.Title>{this.plant.nickname}</Card.Title>
        <Card.Divider/>
        <Text>Name: {this.plant.name}</Text>
        <View>
        <Image
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            resizeMode={'contain'} 
            style={{width: 50, height: 50}}/>
        </View>
        <View>
        <Table>
            <TableWrapper>
            <Row data={["date planted", this.plant.datePlanted]}></Row>
            <Row data={["last watered", this.plant.lastWatered]}></Row>
            <Row data={["health", this.plant.health]}></Row>
            </TableWrapper>
        </Table>
        </View>
    </Card>
);


const card_styles = StyleSheet.create({
    Card: {
        backgroundColor: '#7CA784'
    }
});

export default PlantCard;