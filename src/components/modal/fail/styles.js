import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 15,

    },
    icon: {
        position: 'absolute',
        right: 16,
        top: 16
    },
    view: {
        marginTop: 72,
        flex: 1,
        paddingHorizontal: 32,
        alignItems: 'center',
    },
    text: {
        marginTop: 24,
        marginBottom: 8,
        fontFamily: theme.font[500],
        fontSize: 20
    }
    ,
    subText: {
        textAlign: 'center',
        color: '#4B4B4B',
        fontSize: 14,
        fontFamily: theme.font[400]
    },
    buttons: {
        height: 96 + 24,
        paddingHorizontal: 32,
        justifyContent: 'space-between'
    }
})