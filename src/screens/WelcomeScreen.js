import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import welcome from '../img/welcome.png'
import frame from '../img/Frame.png'
import scan from '../img/Scan.png'
import card from '../img/Card.png'
import arrow from '../img/Arrow.png'
const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>WELCOME</Text>
            <Image style={styles.frame} source={frame} />
            <Image style={styles.scan} source={scan} />
            <Image style={styles.card} source={card} />
            <Image style={styles.arrow} source={arrow} />
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
        marginTop: 55,
    },
    arrow: {
        width: 55,
        height: 30,
        marginLeft: 250,
        marginTop:-70,
    },
})
