/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoScreen from '../screens/InfoScreen';
import DoneScreen from '../screens/DoneScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import { createStackNavigator } from '@react-navigation/stack'

const NavigationScreens = () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={screenOptions}>
            <Stack.Screen name='InfoScreen' component={InfoScreen} screenOptions={screenOptions} />
            <Stack.Screen name='DoneScreen' component={DoneScreen} screenOptions={screenOptions} />
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} screenOptions={screenOptions} />
        </Stack.Navigator>
    )
}

export default NavigationScreens

const styles = StyleSheet.create({})
