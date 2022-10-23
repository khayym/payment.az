import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    inputBox: {
        alignItems: 'center',
    },
    text: {
        fontFamily: theme.font[400],
        fontSize: 14,
    },
    input: {
        fontSize: 34,
        fontWeight: '500',
        textAlign: 'right'
    },
    inputContainer: {
        flexDirection: 'row', alignItems: 'center',
    },
    balance: {
        fontSize: 34, fontWeight: '500',
    },
    error: {
        color: '#FF3D71',
        fontFamily: theme.font[400],
        height: 20
    }
})