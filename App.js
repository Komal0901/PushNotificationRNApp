import React, { Fragment } from 'react';
import NotifService from './components/NotifService';
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen2 from './components/Screen2';
import Details from './components/Details';



const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (



    <NavigationContainer>
      <Stack.Navigator initialRouteName='NavigationScreen'>
        <Stack.Screen name='NavigationScreen' component={NotifService}
          options={{
            headerLeft: () => <Button title='left' onPress={() => { alert("Left button") }} />,
            headerRight: () => <Button title='right' onPress={() => { alert("Right button") }} />,
            headerTitleStyle: {
              fontSize: 30,
              color: 'blue',
              backgroundColor: 'pink'
            }
            ,
            headerStyle: {
              backgroundColor: 'pink',


            }
          }} />
        <Stack.Screen name='Screen2' component={Screen2}
          options={{
            headerTitleStyle: {
              fontSize: 30,
              color: 'purple'

            }
          }} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>



  );
};


export default Navigators;