import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Settings extends Component {
    render() {
        var nav = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={{ flex: 0.10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headText}>settings</Text>
                </View>

                <View style={styles.profile}>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>username</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(username goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>about</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(short description/bio goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>email</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(email address goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>password</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(censored password goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>phone</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(phone number goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>birthday</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(birthdate goes here)</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton} /*onPress={() => }*/>
                            <Image source={require('./../Assets/pen_blue.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./../Assets/plant.png')} style={{ width: 250, height: 250 }} />
                </View>

                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttons} /*onPress={() => nav.navigate('')}*/> // navigate to some help page or something somewhere
                        <Text style={styles.buttonText}>help</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 25
    },
    headText: {
        color: '#769CB9',
        fontSize: 20,
        fontWeight: 'bold'
    },
    profile: {
        flex: 0.40,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    attribute: {
        flex: 0.16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    attributeKey: {
        flex: 0.30,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    attributeValue: {
        flex: 0.60,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    editButton: {

    },
    bodyText: {
        color: '#769CB9'
    },
    buttons: {
        backgroundColor: '#769CB9',
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginVertical: 20,
        width: 300,
        borderRadius: 20
    },
    buttonText: {
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    buttonIcon: {
        width: 35,
        height: 35,
        alignSelf: 'center'
    }
});
export default Settings;