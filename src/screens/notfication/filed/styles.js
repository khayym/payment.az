import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ECECEC',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: theme.colors.warining500,
        borderRadius: 50,
        marginRight: 8,
        alignSelf: 'flex-start',
        marginTop: 5,
    },
    view: {
        flex: 1,
    },
    label: {
        marginVertical: 2,
        fontFamily: theme.font[400],
        fontSize: 12,
        color: '#666666',
    },
    text: {
        fontFamily: theme.font[500],
        color: '#262626'
    },
    date: {
        color: '#1FAADD',
        fontFamily: theme.font[400],
        fontSize: 10,
    }
})