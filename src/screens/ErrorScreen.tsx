import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
const bg = require('../img/bg.png')
const logo = require('../img/logo.png')
const error = require('../img/error.png')
const scan = require('../img/scan.png')
const arrow = require('../img/arrow.png')
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import firebase from '../firebase/firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/core';


const ErrorScreen = ({navigation}) => {
    // const navigation = useNavigation();
    //firebase
    const [user, setUser] = useState<any>([]);
    const getuser = async () => {
        await firebase
            .database()
            .ref()
            .child('noodles')
            .on('value', snapshot => {
                var infor:any[] = [];
                snapshot.forEach(child => {
                    let information = {
                        FullName: child.val().FullName,
                        Birthday: child.val().Birthday,
                        Gender: child.val().Gender,
                        Department: child.val().Department,
                        Id: child.val().Id,
                        Noodles1: child.val().Noodles1,
                        Noodles2: child.val().Noodles2,
                        Noodles3: child.val().Noodles3,

                    };
                    infor.push(information);
                    // setData([1, 2, 3]);
                });
                setUser(infor);
                // console.log('data', data);
                console.log('hihihi', infor)
            });
    };

    useEffect(() => {
        getuser();
    }, []);

    const onSuccess = (e: { data: any; }) => {

        for (let index = 0; index < user.length; index++) {
            // const element = data[index];
            if (user[index].Id == e.data) {
                navigation.navigate('InfoScreen', user[index])
                return;
            } else {
                navigation.navigate('ErrorScreen')
            }
        }
        // );
    };
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
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 55 }}>
                <QRCodeScanner
                    ref={(node) => {
                        if (node) {
                            node.reactivate()
                        }
                    }}
                    cameraStyle={{ width: 87, height: 108, marginLeft: 70 }}
                    onRead={onSuccess}
                // flashMode={RNCamera.Constants.FlashMode.torch}
                />
                <TouchableOpacity >
                    <Image style={styles.arrow} source={arrow} />
                </TouchableOpacity>
            </View>

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
        marginTop: 45,
    },
    css_screenText: {
        fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
        color: '#C71A1A',
        fontSize: 30,
        marginTop: 10,
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
        marginTop: 35,
    },
    scan: {
        width: 270,
        height: 30,
        marginTop: 15,
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
