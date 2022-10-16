import { Dimensions, StyleSheet } from "react-native";
import { theme } from '../../theme/theme';
const w = (Dimensions.get('window').width - 64) / 3;


export const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        width: w,
        maxWidth: 125,
        height: 116,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 16,
        marginVertical: 8,
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 14,
        fontFamily: theme.font[500],
        lineHeight: 20,
        textAlign: 'center',
        marginTop: 13,
    }
})