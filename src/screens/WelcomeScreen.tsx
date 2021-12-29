/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar, Linking } from 'react-native'
const bg = require('../img/bg.png')
const logo = require('../img/logo.png')
const welcome = require('../img/welcome.png')
const frame = require('../img/frame.png')
const scan = require('../img/Scan.png')
const card = require('../img/Card.png')
const arrow = require('../img/Arrow.png')
import { TouchableOpacity } from 'react-native-gesture-handler'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import firebase from '../firebase/firebase'
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }: { navigation: any }) => {

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

    const onSuccess = (e:{data:any}) => {

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
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={logo} />
            <Text style={styles.css_screenText}>WELCOME</Text>
            <View style={styles.frameVideo}>
                <View style={styles.frameBrown}>
                    <View style={styles.frameYellow}>
                        <Video source={require('../video/vid.mp4')}
                            style={{ width: '100%', height: '100%' }}
                            controls
                            repeat
                            hideShutterView={false}
                            resizeMode="stretch"
                        />
                    </View>
                </View>
            </View>
            <Image style={styles.scan} source={scan} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 55 }}>

                <QRCodeScanner
                    ref={(node) => {
                        if (node) {
                            node.reactivate()
                        }
                    }}
                    cameraType='back'
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
        marginTop: 45,
    },
    css_screenText: {
        fontFamily: 'SVN-Nexa Rust Slab Black Shadow',
        color: '#C71A1A',
        fontSize: 30,
        marginTop: 10,
    },
    scan: {
        width: 270,
        height: 30,
        marginTop: 45,
    },
    arrow: {
        // backgroundColor:'black',
        width: 65,
        height: 40,
        // marginLeft: 10,
        marginRight: 20
        // top:-20,
        // marginBottom: 30,
        // backgroundColor: 'blue',
    },
    frameVideo: {
        width: 250,
        height: 170,
        marginTop: 40,
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
