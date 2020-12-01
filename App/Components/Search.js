import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Search extends Component {
    render(){
        var nav = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttons} 
                    onPress={() => nav.navigate('identify mystery plant')}
                    >
                    <Text style={styles.buttonText}>
                        identify mystery plant{'\n'}
                    </Text>
                    <Image
                        source={require('../Assets/camera.png')}
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => nav.navigate('identify plant relationship')}
                    >
                    <Text style={styles.buttonText}>
                        identify plant relationships{'\n'}
                    </Text>
                    <Image
                        source={require('../Assets/tree.png')}
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../Assets/potted_plant.png')}
                    style={styles.pottedPlant}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignSelf: 'center',
        marginTop: 70
    },
    buttons: {
        backgroundColor: '#7CA784',
        alignSelf: 'center',
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginVertical: 20,
        width: 300,
        borderRadius: 20
    },
    buttonText: {
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    buttonIcon: {
        width: 35,
        height: 35,
        alignSelf: 'center',
    },
    pottedPlant: {
        marginTop: 30,
        width: 150,
        height: 200,
        alignSelf: 'center'
    }
});
export default Search;