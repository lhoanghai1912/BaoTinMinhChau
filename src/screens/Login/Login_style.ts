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
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:30,
  },

  //Body
  body:{
    flex:2,
    width:'100%',
    alignItems:'center',
  },

  wrapContent:{
    backgroundColor:'white',
    borderRadius:10,
    alignItems:'center',
    width:'90%',
    height:'70%',
    paddingVertical:30,
    paddingHorizontal:10,
  },

  inputItem:{
    width: '95%',
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom: 30,
    height:'10%',
  },

  iconGroup:{
    flexDirection: 'row',
    position: 'absolute',
    resizeMode: 'contain', // Đảm bảo logo không bị méo
    // zIndex: 1,  
    justifyContent:'space-between',
    width:70,
    right:10,   
    bottom:'15%',
  },

  terms:{
    marginTop:20,
    width:'95%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
  },
});
export default styles;