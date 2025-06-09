import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
//Text  
    text:{
        fontFamily: 'Arial',    // Font mặc định
        fontSize: 20, 
        fontWeight:300,          
        color: '#333',  
    },
    headerText:{
        fontFamily:"Arial",
        fontSize:30,
        color:'#333',
   },

   smallText:{
    fontSize:16,
    color: '#333',  
    fontWeight:500,          
   },

//Input
   textInput:{
    // flex:1,
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    width:'100%',
    alignItems:'flex-start',
   },

//Icon
   icon:{
    resizeMode:'contain',
    zIndex:1,
    height:30,
    width:30,
   },

//Button
   button:{
    backgroundColor:'darkred',
    width:'95%',
    height:'15%',
    alignItems:'center',
    borderRadius:10,
    justifyContent:"center",
   },

   buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:500,
    
   }
})
export default AppStyles;
