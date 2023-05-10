import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function Details(props, { navigation }) {
    const { name, mail, pass } = props.route.params;
    return (
        <View>
            <Text style={styles.text}>Your Details</Text>
            <Text style={styles.textdata} >Name:{props.route.params.name}</Text>
            <Text style={styles.textdata}>Email:{props.route.params.mail}</Text>
            <Text style={styles.textdata}>password:{props.route.params.pass}</Text>
            {/* or */}
            <Text style={styles.textdata}>---------------Another way 👇to show data using this-  const name, mail, pass = props.route.params;-------------------------</Text>
            <Text style={styles.textdata}>{name}</Text>
            <Text style={styles.textdata}>{mail}</Text>
            <Text style={styles.textdata}>{pass}</Text>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        text: {
            textAlign: 'center',
            fontSize: 30,
            borderColor: 'blue',
            borderWidth: 2,
            alignSelf: 'center',
            marginTop: 25,
            color: 'black',
            fontWeight: 'bold'
        },
        textdata: {

            fontSize: 20,
            borderWidth: 2,
            marginTop: 25,
            color: 'black',
            fontWeight: 'bold'
        },
    }
)

export default Details