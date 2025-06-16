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
    color: '#820201',  
    textAlign:'center',
   },

//Input
   textInput:{
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    width:'100%',
    alignItems:'flex-start',
    fontSize:24,
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
    backgroundColor:'#820201',
    borderRadius:10,
    width:'90%',
    justifyContent:"center",
    alignContent:'center',
   },

   buttonText:{
    color:'white',
    fontSize:28,
    fontWeight:500,
    width:'100%',
    textAlign:'center',
    
   }
})
export default AppStyles;
