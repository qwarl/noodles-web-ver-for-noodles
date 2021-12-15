import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import frameInfo from '../img/FrameInfo.png'
import noodles2 from '../img/noodles2.png'
import noodles3 from '../img/noodles3.png'
import noodles1 from '../img/noodles1.png'
import _3CupsLeft from '../img/3CupsLeft.png'
import GetNoodles from '../img/GetNoodles.png'
import avatar from '../img/Rosamundpike.jpg'
import hover from '../img/hover.png'
import unavailableNoodles from '../img/unavailableNoodles.png'
import comeLater from '../img/comeLater.png'
import firebase from '../firebase/firebase'

const InfoScreen = () => {
    const [selectedNoodles1, setSelectedNoodles1] = useState(false)
    const [selectedNoodles2, setSelectedNoodles2] = useState(false)
    const [selectedNoodles3, setSelectedNoodles3] = useState(false)

    //firebase
    const [data, setData] = useState([]);
    const getuser = () => {
        firebase
            .database()
            .ref()
            .child('/noodles')
            .on('value', snapshot => {
                const infor = [];
                snapshot.forEach(child => {
                    let information = {
                        fullname: child.val().FullName,
                        birthday: child.val().Birthday,
                        gender: child.val().Gender,
                        department: child.val().Department,
                    };
                    infor.push(information);
                    // setData([1, 2, 3]);
                });
                setData(infor[1]);
                console.log('dad', data);
            });
    };

    useEffect(() => {
        getuser();
    }, []);


    return (

        <ImageBackground ImageBackground source={bg} resizeMode='cover' style={styles.container} >
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.image} source={logo} />
            <Text style={styles.css_screenText}>INFORMATION</Text>
            <ImageBackground style={styles.frameInfo} source={frameInfo} >
                <Image style={styles.avatar} source={avatar} />
                <View style={styles.css_view}>
                    <Text style={styles.css_text}>
                        Fullname:
                    </Text>
                    <Text style={styles.css_text}>
                        Birthday:
                    </Text>
                    <Text style={styles.css_text}>
                        Gender:
                    </Text>
                    <Text style={styles.css_text}>
                        Department:
                    </Text>
                </View>
                <View style={styles.css_viewFill}>
                    <Text style={styles.css_textFill}>
                        {data.fullname}
                        {/* Alice Mie */}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* 12/10/1999 */}
                        {data.birthday}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* Female */}
                        {data.gender}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* Design */}
                        {data.department}
                    </Text>
                </View>
            </ImageBackground>

            {/* ly my khi da het */}
            {/* <View style={styles.css_unavailableNoodles}>
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
            </View> */}
            {/* ly my khi con */}
            {/* <View style={styles.css_noodles}>
                <TouchableOpacity onPress={() => { setSelectedNoodles1(!selectedNoodles1) }}>
                    {selectedNoodles1 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelectedNoodles2(!selectedNoodles2) }}>
                    {selectedNoodles2 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelectedNoodles3(!selectedNoodles3) }}>
                    {selectedNoodles3 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles3} />
                </TouchableOpacity>
            </View> */}

            <View style={styles.css_noodles}>
                <TouchableOpacity onPress={() => { setSelectedNoodles1(!selectedNoodles1) }}>
                    {selectedNoodles1 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles1} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelectedNoodles2(!selectedNoodles2) }}>
                    {selectedNoodles2 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles2} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setSelectedNoodles3(!selectedNoodles3) }}>
                    {selectedNoodles3 == true && (
                        <Image style={styles.hover1} source={hover} />
                    )}
                    <Image style={styles.noodles} source={noodles3} />
                </TouchableOpacity>
            </View>

            <View style={styles.unavailableText}>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <Text style={styles.css_number}>3 </Text>
                <Text style={styles.css_noti}>cups of noodles left this month</Text>
            </View>
            <Image style={styles.GetNoodles} source={GetNoodles} />
            <Image style={styles.comeLater} source={comeLater} />
        </ImageBackground >
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 70,
        marginTop: 25,
    },
    css_screenText: {
        fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
        color: '#C71A1A',
        fontSize: 30,
        marginTop: 10,
    },
    frameInfo: {
        width: 310,
        height: 115,
        marginTop: 20,
        flexDirection: 'row',
    },
    noodles: {
        marginTop: 10,
        width: 60,
        height: 120,
    },
    css_noodles: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around'
    },
    _3CupsLeft: {
        height: 10,
        width: 150,
        marginTop: 10,
    },
    GetNoodles: {
        width: 180,
        height: 30,
        marginTop: 30,
    },
    comeLater: {
        width: 180,
        height: 30,
        marginTop: -30,
    },
    avatar: {
        borderRadius: width / 2,
        height: 80,
        width: 80,
        marginTop: 15,
        marginLeft: 20,
    },
    css_text: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '800',
        color: '#880B0B',
    },
    css_view: {
        marginTop: 15,
        marginLeft: 10,
    },
    css_textFill: {
        fontFamily: 'Nunito-Regular',
        fontWeight: 'normal',
        color: '#880B0B',
    },
    css_viewFill: {
        marginTop: 15,
        marginLeft: 25,
    },
    css_noti: {
        fontFamily: 'PaytoneOne-Regular',
        fontSize: 9,
    },
    css_number: {
        color: '#D91313',
        fontFamily: 'PaytoneOne-Regular',
        fontSize: 9,

    },
    hover: {
        width: 80,
        height: 80,
    },
    hover1: {
        width: 80,
        height: 80,
        position: 'absolute',
        marginTop: 40,
        marginLeft: -10,
    },
    css_hover: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around',
        position: 'absolute',
        marginTop: 325,
    },
    css_unavailableNoodles: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around',
        position: 'absolute',
        marginTop: 290,
    },
    unavailableNoodles: {
        marginTop: 10,
        width: 60,
        height: 120,
    },
    css_unavailableText: {
        fontFamily: 'PaytoneOne-Regular',
        fontWeight: '400',
        fontSize: 10,
        width: 90,
        // marginLeft:
    },
    unavailableText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 40,
        marginTop: -10,
    }
})
