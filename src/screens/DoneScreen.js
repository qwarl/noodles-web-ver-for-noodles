/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import Done from '../img/Done.png'
import altaNoodle from '../img/altaNoodle.png'
import heart from '../img/heart.png'
import backHome from '../img/backHome.png'
import downArrow from '../img/downArrow.png'
const DoneScreen = ({navigation}) => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>DONE</Text>
            <Image style={styles.altaNoodle} source={altaNoodle} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.css_text}>Enjoy your noodles</Text>
                <Image style={styles.heart} source={heart} />
            </View>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("InfoScreen")}
            >
                <Image style={styles.backHome} source={backHome} />
            </TouchableOpacity>
            <Text style={styles.css_textBelow}>Get them below</Text>
            <Image style={styles.downArrow} source={downArrow} />
        </ImageBackground>

    )
}

export default DoneScreen

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
    altaNoodle: {
        width: 166,
        height: 190,
        marginTop: 25,
    },
    css_text: {
        fontFamily: 'PaytoneOne-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#C71A1A',
        marginTop: 5,
    },
    heart: {
        width: 19,
        height: 15,
        marginLeft: 5,
        marginTop: 9,
    },
    backHome: {
        width: 180,
        height: 32,
        marginTop: 80,
    },
    css_textBelow: {
        fontFamily: 'MPLUS1p-Regular',
        fontWeight: '800',
        color: '#F8C135',
        marginTop: 20,
    },
    downArrow: {
        width: 18,
        height: 30,
        marginTop: 5,
    }
})
