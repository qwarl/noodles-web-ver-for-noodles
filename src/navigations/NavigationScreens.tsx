/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoScreen from '../screens/InfoScreen';
import DoneScreen from '../screens/DoneScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import ErrorScreen from '../screens/ErrorScreen'
import OutOfNoodlesScreen from '../screens/OutOfNoodlesScreen'
import { createStackNavigator } from '@react-navigation/stack'

const NavigationScreens = () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='InfoScreen' component={InfoScreen}  />
            <Stack.Screen name='DoneScreen' component={DoneScreen}  />
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='ErrorScreen' component={ErrorScreen}  />
            <Stack.Screen name='OutOfNoodlesScreen' component={OutOfNoodlesScreen}  />
        </Stack.Navigator>
    )
}

export default NavigationScreens

const styles = StyleSheet.create({})
