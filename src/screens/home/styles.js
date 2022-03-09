import {COLORS} from '../../utils/constants/colors';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    titulo:{
      fontSize: 32,
      textAlign:'center',
      fontWeight: 'bold',
      color: COLORS.accent,
      marginTop: 15
    },  
    img:{
      width: 350,
      borderRadius: 15,
      marginVertical: 15
    },
    text:{
      fontSize: 18,
      color:COLORS.accent,
      marginVertical: 10
    },
    textContainer:{
      padding: 10,
      display: 'flex',
      alignItems: 'center'
    },  
    categories: {
      backgroundColor: COLORS.primary,
      borderWidth: 3,
      display:'flex',
      alignItems: 'center',
      borderColor: COLORS.violeta,
      marginVertical: 10,
      borderRadius: 14,
      padding: 10
    },
    text2:{
      fontSize: 18,
      color:'#Fff',
      fontWeight:'bold',
      marginVertical: 10
    },
    btn: {
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 18,
      backgroundColor: COLORS.accent,
      padding: 15,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: -10
    }
  });


  export default styles;