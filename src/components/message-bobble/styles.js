import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    moti: {
        // borderWidth: 1,
        marginVertical: 2,
    },
    text: {
        color: '#fff',
        fontFamily: theme.font[400],
        fontSize: 14,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    default: {
        backgroundColor: '#038BFF',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        maxWidth: 222,
        minWidth: 153
    },
    white: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        maxWidth: 222,
        minWidth: 153
    },
    outlined: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#038BFF',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        maxWidth: 222,
        minWidth: 153
    },
    textView: {

        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    }
})