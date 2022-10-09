import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    main: {
        color: '#222B45',
        fontSize: 24,
        fontFamily: 'Euclid-medium',
    },
    child: {
        marginTop: 8,
        color: '#767676',
        fontSize: 14,
        fontFamily: 'Euclid-light',
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
        fontFamily: 'Euclid-light',
    },
    blur: {
        color: '#038BFF',
        fontSize: 14,
        fontFamily: 'Euclid-regular',
    }
})