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
})
export default styles;