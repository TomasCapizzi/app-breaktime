import {COLORS} from '../../utils/constants/colors'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      alignItems: 'center',
    },
    titulo:{
      marginVertical:25,
      fontSize: 30,
      fontWeight: 'bold',
      color: COLORS.accent
    },  
    img: {
      width:200,
      height: 190,
      marginBottom:15,
    },
    text: {
      fontSize: 18,
      marginVertical: 40,
      color: COLORS.violeta    
    },
    precio: {
      fontSize: 25,
      color:'#fff',
      backgroundColor: COLORS.accent,
      fontWeight: 'bold',
      padding: 15,
      borderRadius: 10,
      marginBottom: 50      
    }
  });


  export default styles;