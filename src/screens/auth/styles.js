import { Dimensions, StyleSheet } from 'react-native';

import {COLORS} from '../../utils/constants/colors'

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    containerCard: {
        height: height / 1.6,
        width: width * 0.7,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom: 20,
        color:COLORS.violeta ,
    },
    containerForm: {
        flex: 1,
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color:COLORS.violeta,
        fontSize: 16,
        marginBottom: 15,
    },
    linkText: {
        color: COLORS.accent,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});