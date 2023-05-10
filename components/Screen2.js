import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'


function Screen2({ navigation }) {
    const [name, setName] = useState("");
    const [mail, setmail] = useState("");
    const [pass, setpass] = useState("");

    return (
        <View style={{ backgroundColor: 'black', flex: 1, flexDirection: 'column' }}>
            <Text style={styles.text}>Hii 🙋‍♀️.....This is screen  after navigation.🥳</Text>
            <Text style={styles.heading}>Details</Text>
            <ScrollView style={styles.scroll}>
                <TextInput keyboardType="default" style={styles.input} placeholder='Enter your name' onChangeText={(nam) => setName(nam)} placeholderTextColor='white' />
                <TextInput keyboardType="email-address" style={styles.input} placeholder='Enter Email' placeholderTextColor='white' onChangeText={(email) => setmail(email)} />
                <TextInput style={styles.input} placeholder='Enter your password' placeholderTextColor='white' onChangeText={(pswrd) => setpass(pswrd)} />
                {console.warn(name, mail, pass)}
            </ScrollView>

            <Button title='Submit' onPress={() => navigation.navigate('Details', { name, mail, pass })} />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        borderColor: 'yellow',
        borderWidth: 2,
        alignSelf: 'center',
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        alignSelf: 'center',
        color: 'yellow',
        fontSize: 20
    },
    heading: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'

    },
    scroll: {
        marginBottom: 50
    }

})
export default Screen2