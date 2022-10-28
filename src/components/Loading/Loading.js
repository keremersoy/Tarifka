import React from 'react';
import {View, StyleSheet,Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={styles.continer}>
            <Lottie style={styles.loading_animation} source={require("../../assets/loading.json")} autoPlay loop/>
        </View>
    );
}

const deviceDimensions=Dimensions.get("window");
const styles = StyleSheet.create({
    continer:{
        justifyContent:"center",
        alignItems:"center",
        width:deviceDimensions.width,
        height:deviceDimensions.height
    },
    loading_animation:{
        width:deviceDimensions.width/8,
        height:deviceDimensions.height/8,
    }
})

export default Loading;
