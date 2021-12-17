/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InfoScreen from './src/screens/InfoScreen';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreens from './src/navigations/NavigationScreens';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './src/redux/store';

const store = configureStore();

const App: () => Node = () => {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <NavigationScreens />
            </NavigationContainer>
        </ReduxProvider>
        //  <InfoScreen/>
    );
};

const styles = StyleSheet.create({});

export default App;
