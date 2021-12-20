import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import welcome from '../img/welcome.png'
import frame from '../img/Frame.png'
import scan from '../img/Scan.png'
import card from '../img/Card.png'
import arrow from '../img/Arrow.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>WELCOME</Text>
            <View style={styles.frameVideo}>
                <View style={styles.frameBrown}>
                    <View style={styles.frameYellow}>

                    </View>
                </View>
            </View>
            <Image style={styles.scan} source={scan} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 65, marginLeft: 45 }}>
                <Image style={styles.card} source={card} />
                <TouchableOpacity style={{ marginLeft: 40 }} onPress={() => navigation.navigate('InfoScreen')}>
                    <Image style={styles.arrow} source={arrow} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        width: 90,
        height: 70,
        marginTop: 25,
    },
    css_screenText: {
        fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
        color: '#C71A1A',
        fontSize: 30,
        marginTop: 5,
    },
    frame: {
        width: 290,
        height: 170,
        marginTop: 25,
    },
    scan: {
        width: 270,
        height: 30,
        marginTop: 40,
    },
    card: {
        width: 87,
        height: 108,
        marginLeft: 70,
        // marginTop: 55,

    },
    arrow: {
        // backgroundColor:'black',
        width: 55,
        height: 30,
        // top: -15,
        // position:'absolute'
    },
    frameVideo: {
        width: 290,
        height: 170,
        marginTop: 25,
        // borderColor:'white',
        backgroundColor: 'white',
        borderRadius: 10,
        // borderWidth:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameBrown: {
        // borderWidth:0.5,
        borderRadius: 10,
        // borderColor:'black',
        backgroundColor: 'brown',
        width: '95%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameYellow: {
        borderRadius: 10,
        // borderColor:'black',
        backgroundColor: '#FFA500',
        width: '98.8%',
        height: '98%',
    },
    css_video: {
        marginLeft: 1,
    }
})
