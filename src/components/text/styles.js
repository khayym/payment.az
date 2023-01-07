import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    main: {
        color: '#222B45',
        fontSize: 24,
        fontFamily: theme.font[500],
        textAlign: 'center'
    },
    child: {
        marginTop: 8,
        color: '#767676',
        fontSize: 14,
        fontFamily: theme.font[400],
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    footerText: {
        color: '#222B45',
        fontSize: 14,
        fontFamily: theme.font[400],
    },
    blur: {
        color: '#038BFF',
        fontSize: 14,
        fontFamily: theme.font[500],
    }
})