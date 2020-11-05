import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, StatusBar } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {Container, Content, Body, Title, Tab} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

/// PUT THIS INTO APP.JS TO MAKE IT WORK 
const PlantCard = (props) => {
    return(
      <Card containerStyle={card_styles.Card}>
        <Card.Title>{props.plant.nickname}</Card.Title>
        <Card.Divider/>
        <Text>Name: {props.plant.name}</Text>
        <View>
        <Image
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            resizeMode={'contain'} 
            style={{width: 50, height: 50}}/>
        </View>
        <View>
        <Table>
            <TableWrapper>
            <Row data={["date planted", props.plant.datePlanted]}></Row>
            <Row data={["last watered", props.plant.lastWatered]}></Row>
            <Row data={["health", props.plant.health]}></Row>
            </TableWrapper>
        </Table>
        </View>
    </Card>
    );
  }


const card_styles = StyleSheet.create({
    Card: {
        backgroundColor: '#7CA784'
    }
});

export default PlantCard;