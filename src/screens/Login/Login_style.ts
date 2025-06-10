import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'darkred',
    alignContent:'center',

  },

  //Header
  header:{
    marginTop:50,
    flex:0.4,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:30,
  },

  //Body
  body:{
    flex:1,
    width:'100%',
    alignItems:'center',
  },

  wrapContent:{
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center',
    width:'90%',
    // height:'60%',
    justifyContent:"space-evenly",
    flex:1,
    paddingVertical:30,

  },

  inputItem:{
    width: '95%',
    flexDirection: 'row',
    justifyContent:'center',
  },

  iconGroup:{
    flexDirection: 'row',
    position: 'absolute',
    resizeMode: 'contain', // Đảm bảo logo không bị méo
    // zIndex: 1,  
    justifyContent:'space-between',
    width:70,
    right:10,   
    bottom:'45%',
  },

  terms:{
    marginTop:20,
    width:'95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
  },

//Footer
  footer:{
    flex:0.5,
  },
});
export default styles;