import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    main: {
        color: '#222B45',
        fontSize: 24,
        fontFamily: 'Euclid-medium',
        textAlign: 'center'
    },
    child: {
        marginTop: 8,
        color: '#767676',
        fontSize: 14,
        fontFamily: 'Euclid-light',
        textAlign: 'center'
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