import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    continer: {
        width: '100%',
        borderColor: 'red',
        marginTop: 34,
    },
    optionView: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
        borderColor: '#F1F1F1'
    },
    head: {
        fontFamily: theme.font[400],
        fontSize: 14,
    },
    text: {
        fontFamily: theme.font[500],
        color: '#222B45',
        fontSize: 14,
    }
})