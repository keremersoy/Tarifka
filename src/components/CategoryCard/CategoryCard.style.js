import { StyleSheet, Dimensions} from "react-native";

const deviceDimensions=Dimensions.get("window");

export default StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        borderTopStartRadius:50,
        borderBottomEndRadius:50,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#BAD1C2",
        flexDirection:"row",
        backgroundColor:"white",
        alignItems:"center",
    },
    image:{
        width:deviceDimensions.width/4,
        height:deviceDimensions.width/4,
        resizeMode:"contain",
        borderRadius:100
    },
    title:{
        marginLeft:10,
        fontSize:30,
        fontWeight:"bold",
        color:"Black"
    }
});