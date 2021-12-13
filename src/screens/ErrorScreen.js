import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import error from '../img/error.png'
import scan from '../img/Scan.png'
import card from '../img/Card.png'
import arrow from '../img/Arrow.png'

const ErrorScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>
                ERROR
            </Text>
            <Text style={styles.css_p}>
                Can not recongnize your ID card.
            </Text>
            <View style={styles.css_view}>
                <Text style={styles.css_scanAgain}>Please scan again.</Text>
            </View>
            <Image style={styles.error} source={error} />
            <Image style={styles.scan} source={scan} />
            <Image style={styles.card} source={card} />
            <Image style={styles.arrow} source={arrow} />

        </ImageBackground>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
        marginTop: 15,
    },
    css_p: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '800',
        color: '#980000',
        fontSize: 15,
        marginTop: 15,
    },
    css_view: {
        backgroundColor: '#D86643',
        width: 140,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    css_scanAgain: {
        color: 'white',
        fontFamily: 'Nunito-Regular',
        fontWeight: '800',
    },
    error: {
        width: 108,
        height: 130,
        marginTop: 15,
    },
    scan: {
        width: 270,
        height: 30,
        marginTop: 10,
    },
    card: {
        width: 87,
        height: 108,
        marginTop: 35,
    },
    arrow: {
        width: 55,
        height: 30,
        marginLeft: 250,
        marginTop: -70,
    },
})
