import { StyleSheet,Dimensions } from "react-native";
const deviceDimensions=Dimensions.get("window");

export default StyleSheet.create({
    outer_container:{
        backgroundColor:"white",
        padding:5,
        flex:1,
    },
    inner_container:{
        backgroundColor:"#FDF0E0",
        padding:10,
    },
    top_container:{
        width:deviceDimensions.width-30,
        height:deviceDimensions.height/2
    },
    title_container:{
        flex:1,
        borderBottomWidth:1,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        flex:4,
        resizeMode:"contain"
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"#2C3639",
    },
    area:{
        fontSize:13,
        color:"#3F4E4F",
        fontWeight:"bold"
    },
    bottom_container:{
        marginTop:15
    },
    instructions:{
        fontSize:15,
        color:"black"
    },
    btn_youtube:{
        marginTop:12,
        backgroundColor:"#CF0A0A",
        padding:10,
        borderRadius:15,
        justifyContent:"center",
        textAlign:"center"
    },
    btn_youtube_text:{
        color:"white",
        textAlign:"center",
    }
});