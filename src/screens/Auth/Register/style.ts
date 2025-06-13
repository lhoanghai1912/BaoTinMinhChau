import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,   
        alignContent:'center',
    },
    iconGroup:{
        position:'absolute',
        right:9,
        top:'25%',
    },
    text:{
        width:'100%',
        fontSize:20,
        textAlign:'left',
        color:'#333',
    },
    textInput:{
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
        alignItems:'flex-start',
        marginBottom:9,
        alignSelf:'center',
   },
    icon:{
        resizeMode:'contain',
        zIndex:1,
        height:30,
        width:30,   
    },
    input:{
        borderRadius:10,
        width:'95%',
        paddingHorizontal:5,
        borderWidth:1,
        alignItems:'flex-start',
        alignSelf:"center",
        marginTop:16,
    },
   
})
export default styles;