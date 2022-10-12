import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 48,
        justifyContent: 'center',
    },
    safeArea: {
        backgroundColor: '#fff',
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Euclid-light',
        color: '#767676',
        fontSize: 14
    },
    title: {
        color: '#222B45',
        fontSize: 20,
        marginTop: 40,
        marginBottom: 16,
        fontFamily: 'Euclid-regular',
    },
    buttons: {
        borderColor: 'blue',
        flex: 1,
        // justifyContent: 'center',
        marginTop: 100,
    },
    help: {
        color: '#0095FF',
        fontFamily: 'Euclid-regular',
        fontSize: 12,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: 'red',

    },
    img: {
        flex: 0.3,
    }
})
