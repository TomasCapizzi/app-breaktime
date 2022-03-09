import {COLORS} from '../../utils/constants/colors'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.violeta,
        fontWeight: 'bold',
        marginVertical: 15,
    },  
    list: {
        flex: 1
    },
    footer: {
        padding: 12,
        bottomTopColor: COLORS.accent,
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: COLORS.violeta,
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: '#fff'
    },
    total: {
        flexDirection: "row",
    },
    text: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        color: "#fff",
    }
});


export default styles;