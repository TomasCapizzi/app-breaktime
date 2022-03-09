import { Dimensions, StyleSheet } from "react-native";

import {COLORS} from '../../utils/constants/colors';

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
    borderRadius: 6,
    margin: 15,
  },
  containerTouchable: {
      flex: 1,
      borderRadius: 6,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 3,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center",
      padding: 8
  },
  name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: COLORS.primary,
    },
    detailsContainer:{
      display: 'flex',
      flexDirection: 'row',
      width: '70%',
      justifyContent:'space-around',
      alignItems: 'center',
      marginTop: 5
    },
    details: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 18,
      color: COLORS.violeta,
  },
    img: {
      width: 100,
      height: 100
    }
  });


  export default styles;