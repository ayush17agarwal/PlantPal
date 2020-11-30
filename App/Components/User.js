import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Settings from './Settings';
import { ScrollView } from 'react-native-gesture-handler';

// handleClick = ({ navigation }) => {
//     navigation.navigate('Settings')
// }

class User extends Component {
    render() {
        var nav = this.props.navigation;
        return (
            <View style={styles.container}>

                <View style={{ flex: 0.05, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttons} onPress={() => nav.navigate('Settings')}> // navigate to settings screen
                        <Image source={require('./../../Assets/settings.png')} style={styles.buttonIcon} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0.05, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.headText}>(name goes here)</Text>
                </View>

                <View style={{ flex: 0.20, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./../../Assets/user_sky.png')} style={{ width: 150, height: 150 }} />
                </View>

                <View style={styles.profile}>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>username</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(username goes here)</Text>
                        </View>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>about</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(short description/bio goes here)</Text>
                        </View>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>gardens</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(# of gardens goes here)</Text>
                        </View>
                    </View>

                    <View style={styles.attribute}>
                        <View style={styles.attributeKey}>
                            <Text style={styles.bodyText}>plants</Text>
                        </View>
                        <View style={styles.attributeValue}>
                            <Text style={styles.bodyText}>(# of plants goes here)</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                    // <Image source={require('./../../Assets/user_sky.png')} style={{ width: 250, height: 250 }} />
                    // change this to plant health scale ^
                </View>

                <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttons} onPress={() => nav.navigate('')}> // navigate to social screen?
                        <Text style={styles.buttonText}>view my posts</Text>
                    </TouchableOpacity>
                </View>

            </View>
            )
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
        flex: 0.30,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    attribute: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    attributeKey: {
        flex: 0.40,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    attributeValue: {
        flex: 0.60,
        alignItems: 'flex-start',
        justifyContent: 'center'
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
export default User;