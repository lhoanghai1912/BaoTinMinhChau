import { StyleSheet } from 'react-native';
import { colors } from '../../../components/Style/Colors';

const styles = StyleSheet.create({

    container:{
        flex:1,   
        alignContent:'center',
        backgroundColor:'#F6F6F6',
    },
    body:{
        flex:1,
        paddingHorizontal:16,
    },
    iconGroup:{
        position:'absolute',
        right:9,
        top:'25%',
    },
    text:{
        // width:'100%',
        fontSize:20,
        textAlign:'left',
        color:colors.black,
    },
    icon:{
        resizeMode:'contain',
        zIndex:1,
        height:30,
        width:30,  
        top:30, 
    },
    input:{
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.silver,
        height:80,
        width:'100%',
        paddingHorizontal:9,
        paddingVertical:5,
        marginTop:32,
        flexDirection: 'column',
    },
   
})
export default styles;