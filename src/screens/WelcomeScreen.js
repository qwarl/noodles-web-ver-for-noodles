import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar, Linking } from 'react-native'
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import welcome from '../img/welcome.png'
import frame from '../img/Frame.png'
import scan from '../img/Scan.png'
import card from '../img/Card.png'
import arrow from '../img/Arrow.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import firebase from '../firebase/firebase'

// import Video from 'react-native-video'
const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {

    //firebase
    const [user, setUser] = useState([]);
    const getuser = async () => {
        await firebase
            .database()
            .ref()
            .child('noodles')
            .on('value', snapshot => {
                const infor = [];
                snapshot.forEach(child => {
                    let information = {
                        FullName: child.val().FullName,
                        Birthday: child.val().Birthday,
                        Gender: child.val().Gender,
                        Department: child.val().Department,
                        Id: child.val().Id,

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

    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err),
        //     console.log('hmhmhm', e.data)
        // console.log('dfsf', e.data)

        // data.(user => {
        //     // let vur=e.data
        //     // console.log(JSON.stringify(user));
        //     // console.log(JSON.stringify(vur));
        //     // // vur=vur.replace(/\\/g, '');
        //     console.log(`${user.Id},${e.data}`, user.Id==e.data);
        //     console.log('thth:',user.Id==e.data)
        //     if (user.Id==e.data) {
        //         navigation.navigate('InfoScreen',user)
        //         // return true;
        //     }else{
        //         navigation.navigate('ErrorScreen')
        //     }
        // });
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
                        {/* <Video source={require('../video/vid.mp4')}
                        style={{width:'100%',height:'100%'}}
                        /> */}
                    </View>
                </View>
            </View>
            <Image style={styles.scan} source={scan} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 65, marginLeft: 45 }}>
                <QRCodeScanner
                    cameraStyle={{ width: 87, height: 108 }}
                    onRead={onSuccess}
                // flashMode={RNCamera.Constants.FlashMode.torch}

                />
                {/* <TouchableOpacity style={{ marginLeft: 40 }} onPress={() => navigation.navigate('InfoScreen')}>
                    <Image style={styles.arrow} source={arrow} />
                </TouchableOpacity> */}
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
