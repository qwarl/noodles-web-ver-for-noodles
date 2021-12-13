import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import outOfNoodles from '../img/outOfNoodles.png'
const OutOfNoodlesScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>
                OUT OF NOODLES
            </Text>
            <Text style={styles.css_p}>
            There is <Text style={{color:'white'}}>0</Text> cup of noodles left in the machine. Please fill in to continue.
            </Text>
            <Image style={styles.outOfNoodles} source={outOfNoodles}/>
        </ImageBackground>
    )
}

export default OutOfNoodlesScreen

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
    css_screenText:{
        fontFamily:'SVN-Nexa Rust Slab Black Shadow',
        color:'#C71A1A',
        fontSize:30,
        marginTop:20,
    },
    css_p:{
        fontFamily: 'Nunito-Regular',
        fontWeight: '800',
        width:'67%',
        color:'#980000',
        fontSize:15,
        marginTop:15,
    },
    outOfNoodles:{
        width:180,
        height:121,
        marginTop:20,
    }
})
