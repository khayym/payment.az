import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 11,
        alignItems: 'center',

    },
    box: {
        // width: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    notActiveText: {
        color: '#B2B2B2',
        fontFamily: theme.font[400],
        fontSize: 14,
    },
    text: {
        color: '#fff',
        fontFamily: theme.font[500],
        fontSize: 14,
    }
})