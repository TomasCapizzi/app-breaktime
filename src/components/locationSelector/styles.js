import { COLORS } from "../../utils/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:20
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderColor: COLORS.accent,
        borderWidth: 1
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default styles;