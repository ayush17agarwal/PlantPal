import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Settings extends Component {
    state = {
        user: [] 
    }

    render() {
        var user = this.state.user; 
        return (
            <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <View>
                <Table>
                    <TableWrapper>
                    <Row data={["username", user.username]}></Row>
                    <Row data={["about", user.date_planted]}></Row>
                    <Row data={["email", user.email]}></Row>
                    <Row data={["password", '........']}></Row>
                    <Row data={["phone", user.phone_number]}></Row>
                    <Row data={["birthday", user.birthday]}></Row>
                    </TableWrapper>
                </Table>
            </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Settings;