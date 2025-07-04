import { StyleSheet } from "react-native";
import { colors } from "../../components/Style/Colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.red,
    paddingHorizontal:16
  },

  //Header
  header:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:32,
  },
  headerText:{
    fontSize: 40,
    marginBottom: 9,
    color: colors.yellow,
    fontWeight: 'bold',
  },

  //Body
  body:{
    flex:1,
    alignItems:'center',
  },

  wrapContent:{
    backgroundColor:colors.white,
    borderRadius:10,
    paddingHorizontal:16,
    paddingVertical:30,

  },

  inputItem:{
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom:9,
  },

  iconGroup:{
    flexDirection: 'row',
    position: 'absolute',
    resizeMode: 'contain', // Đảm bảo logo không bị méo
    // zIndex: 1,  
    justifyContent:'space-between',
    width:70,
    right:10,   
    bottom:'25%',
  },
  forgotPassword:{
    marginBottom: 9,
    marginTop: 5,
  },
  terms:{
    // paddingHorizontal:9,
    // flex:1,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:16,
  },

//Footer
  footer:{
    flex:1,
  },
});
export default styles;