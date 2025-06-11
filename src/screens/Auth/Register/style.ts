import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,   
        alignContent:'center',
    },
    iconGroup:{
        flexDirection: 'row',
        position: 'absolute',
        resizeMode: 'contain', // Đảm bảo logo không bị méo
        // zIndex: 1,  
        justifyContent:'space-between',
        width:70,
        right:10,   
    },
    text:{
        fontSize:20,
        textAlign:'center',
        color:'#CCC',
    },
    textInput:{
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
        width:'100%',
        alignItems:'flex-start',
        fontSize:24,
   },
   btnShowPass:{
    backgroundColor:'darkred',
   //  alignItems:'center',
    borderRadius:10,
    justifyContent:"center",
    alignContent:'center',
   },
    icon:{
        resizeMode:'contain',
        zIndex:1,
    //  padding:3,
        height:30,
        width:30,
    },

    input:{
        borderRadius:10,
        width:'100%',
        paddingHorizontal:5,
        paddingRight:10,
    },
   
})
export default styles;