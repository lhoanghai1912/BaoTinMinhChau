import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
//Text  
   text:{
      fontSize: 20, 
      fontWeight:300,          
      color: '#333',  
      textAlign:'center',
   },
   headerText:{
      fontFamily:"Arial",
      fontSize:26,
      color:'#333',
      marginBottom: 16,
      textAlign: 'center'
   },
   smallText:{
    fontSize:18,
    color: 'darkred',  
    textAlign:'center',
   },

//Input
   textInput:{
    // flex:1,
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    width:'100%',
    alignItems:'flex-start',
    fontSize:24,
   //  marginBottom:16,
   },

//Icon
   icon:{
    resizeMode:'contain',
    zIndex:1,
   //  padding:3,
    height:30,
    width:30,
   },

//Button
   button:{
    backgroundColor:'darkred',
   //  alignItems:'center',
    borderRadius:10,
    justifyContent:"center",
    alignContent:'center',
   },

   buttonText:{
    color:'white',
    fontSize:20,
    fontWeight:500,
    width:'100%',
    textAlign:'center',
    
   }
})
export default AppStyles;
