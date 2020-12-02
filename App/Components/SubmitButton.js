import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';

const SubmitButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.postButtonContainer}>
        <Text style={styles.postText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    postButtonContainer: {
        backgroundColor: "#769CB9",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 50,
    },
    postText: {
        color: "white",
        fontWeight: "200",
        alignSelf: "center",
        textTransform: "lowercase",
        fontFamily: 'Roboto'
    }
});

export default SubmitButton; 