import { StyleSheet,Dimensions } from "react-native";
const deviceDimensions=Dimensions.get("window");
export default StyleSheet.create({
    container:{
        margin:10,
        padding:5,
        borderRadius:15,
        justifyContent:"flex-end",
        alignItems:"center",
        width:deviceDimensions.width-20,
        height:deviceDimensions.width/2,
    },
    image:{
        borderRadius:15
    },
    title:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
        color:"white",
        backgroundColor:"#0c000cc0"
    }
});