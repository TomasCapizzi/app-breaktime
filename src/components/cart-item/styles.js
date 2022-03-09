import { Dimensions, StyleSheet } from "react-native";

import {COLORS} from '../../utils/constants/colors';

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 7,
    borderRadius: 16,
    padding: 10,
    margin: 15,
    backgroundColor: COLORS.primary
  },
  containerTouchable: {
      flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:15
  },
  name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: COLORS.accent
  },
    details: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'space-between',
      text:{
        color:'#fff'
      }
  },
  img:{
    width: 50,
    height: 50
  }
  });


  export default styles;