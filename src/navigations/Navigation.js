import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InfoScreen from '../screens/InfoScreen';
import DoneScreen from '../screens/DoneScreen'
import { createStackNavigator } from '@react-navigation/stack'

const DrawerNavigation = ({ navigation }) => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
    return (
        <Stack.Navigator initialRouteName='InfoScreen' screenOptions={screenOptions}>
            <Stack.Screen name='InfoScreen' component={InfoScreen} screenOptions={screenOptions} />
            <Stack.Screen name='DoneScreen' component={DoneScreen} screenOptions={screenOptions} />
        </Stack.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
