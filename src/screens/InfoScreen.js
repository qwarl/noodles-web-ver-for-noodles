import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
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
import { useSelector, useDispatch } from 'react-redux'

const InfoScreen = ({ navigation, route }) => {
    console.log('route', route)
    const Noodles = useSelector(state => state.NoodlesReducer.noodles);
    console.log('ahaha', Noodles)
    console.log("_____________________")

    const [selectedNoodles1, setSelectedNoodles1] = useState(false)
    const [selectedNoodles2, setSelectedNoodles2] = useState(false)
    const [selectedNoodles3, setSelectedNoodles3] = useState(false)
    const [comeBackLater, setComeBackLater] = useState(false)

    // //firebase
    const [data, setData] = useState(route.params);
    // const getuser = async () => {
    //     await firebase
    //         .database()
    //         .ref()
    //         .child('noodles')
    //         .on('value', snapshot => {
    //             const infor = [];
    //             snapshot.forEach(child => {
    //                 let information = {
    //                     fullname: child.val().FullName,
    //                     birthday: child.val().Birthday,
    //                     gender: child.val().Gender,
    //                     department: child.val().Department,
    //                 };
    //                 infor.push(information);
    //                 // setData([1, 2, 3]);
    //             });
    //             setData(infor[1]);
    //             console.log('data', data);
    //         });
    // };

    // useEffect(() => {
    //     getuser();
    // }, []);

    const setNoodles1 = (noodles) => dispatch({
        type: 'SET_NOODLES1',
        payload: noodles
    })
    const setNoodles2 = (noodles) => dispatch({
        type: 'SET_NOODLES2',
        payload: noodles
    })
    const setNoodles3 = (noodles) => dispatch({
        type: 'SET_NOODLES3',
        payload: noodles
    })
    const dispatch = useDispatch();

    const handleGetNoodles = async () => {
        if (!selectedNoodles1 && !selectedNoodles2 && !selectedNoodles3) {

        } else {
            //handle redux
            if (selectedNoodles1) {
                await setNoodles1(false)
                setSelectedNoodles1(false)
            }
            if (selectedNoodles2) {
                await setNoodles2(false)
                setSelectedNoodles2(false)
            }
            if (selectedNoodles3) {
                await setNoodles3(false)
                setSelectedNoodles3(false)
            }
            navigation.navigate('DoneScreen')
        }
    }
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
                        {data.FullName}
                        {/* Alice Mie */}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* 12/10/1999 */}
                        {data.Birthday}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* Female */}
                        {data.Gender}
                    </Text>
                    <Text style={styles.css_textFill}>
                        {/* Design */}
                        {data.Department}
                    </Text>
                </View>
            </ImageBackground>
            {/* ly mi 1 */}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginTop: 10, marginLeft: -50 }}>
                    <View>
                        {
                            Noodles.noodles1 ? (
                                <TouchableOpacity onPress={() => { setSelectedNoodles1(!selectedNoodles1) }}>
                                    {selectedNoodles1 == true && (
                                        <Image style={{ width: 80, height: 80, position: 'absolute', marginTop: 30, left: -25 }} source={hover} />
                                    )}
                                    <Image style={{ width: 60, height: 120, marginLeft: -17 }} source={noodles1} />
                                </TouchableOpacity>)
                                :
                                (<View>
                                    <Image style={{ width: 60, height: 120, marginTop: 0, }} source={unavailableNoodles} />
                                    <Text style={{ fontFamily: 'PaytoneOne-Regular', fontWeight: '400', fontSize: 10, }}>Unavailable</Text>
                                </View>)
                        }
                    </View>
                </View>
                {/* ly mi 2 */}
                <View style={{ left: 28, marginTop: 10 }}>
                    <View>
                        {
                            Noodles.noodles2 ? (
                                <TouchableOpacity onPress={() => { setSelectedNoodles2(!selectedNoodles2) }}>
                                    {selectedNoodles2 == true && (
                                        <Image style={{ width: 80, height: 80, position: 'absolute', marginTop: 30, left: -3 }} source={hover} />
                                    )}
                                    <Image style={{ width: 60, height: 120, left: 5 }} source={noodles1} />
                                </TouchableOpacity>
                            ) :
                                (<View>
                                    <Image style={{ width: 60, height: 120, marginTop: 0 }} source={unavailableNoodles} />
                                    <Text style={{ fontFamily: 'PaytoneOne-Regular', fontWeight: '400', fontSize: 10, }}>Unavailable</Text>
                                </View>)
                        }


                    </View>
                </View>
                {/* ly mi 3 */}
                <View style={{ left: 56, marginTop: 10 }}>
                    <View>
                        {
                            Noodles.noodles3 ? (
                                <TouchableOpacity onPress={() => { setSelectedNoodles3(!selectedNoodles3) }}>
                                    {selectedNoodles3 == true && (
                                        <Image style={{ width: 80, height: 80, position: 'absolute', marginTop: 30, left: 2 }} source={hover} />
                                    )}
                                    <Image style={{ width: 60, height: 120, left: 11 }} source={noodles1} />
                                </TouchableOpacity>
                            )
                                :
                                (<View>
                                    <Image style={{ width: 60, height: 120, marginTop: 0 }} source={unavailableNoodles} />
                                    <Text style={{ fontFamily: 'PaytoneOne-Regular', fontWeight: '400', fontSize: 10, }}>Unavailable</Text>
                                </View>)
                        }


                    </View>
                </View>

            </View>

            <View style={{ flexDirection: 'row', marginTop: 0 }}>
                <Text style={styles.css_number}>
                    {Noodles.remain} </Text>
                <Text style={styles.css_noti}>cups of noodles left this month</Text>
            </View>

            {/* button get cup of noodles */}
            {
                Noodles.remain > 0 &&
                (
                    <TouchableOpacity onPress={handleGetNoodles}>
                        <Image style={styles.GetNoodles} source={GetNoodles} />
                    </TouchableOpacity>
                )
            }
            {/* button comeback next month when out of noodles  */}
            {
                Noodles.remain == 0 &&
                (
                    <TouchableOpacity onPress={handleGetNoodles}>
                        <Image style={styles.GetNoodles} source={comeLater} />
                    </TouchableOpacity>
                )
            }
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
        marginTop: 289,
        left: 55,
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
