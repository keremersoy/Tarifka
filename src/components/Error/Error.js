import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';

const Error = () => {
    return (
        <View style={styles.container}>
            <Lottie style={styles.error_animation} source={require("../../assets/error.json")} autoPlay loop/>
            <Text style={styles.error_text}>BİR HATA OLUŞTU</Text>
        </View>
    );
}

const deviceDimensions=Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width:deviceDimensions.width,
        height:deviceDimensions.height
    },
    error_animation:{
        width:deviceDimensions.width/8,
        height:deviceDimensions.height/8,
    },
    error_text:{
        fontSize:30,
        fontWeight:"bold",
        color:"#FF6464"
    }
})

export default Error;
