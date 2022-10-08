import { StyleSheet } from "react-native"

export const primary = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        borderRadius: 8,
        borderColor: '#038BFF',
        maxHeight: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#038BFF'
    },
    text: {
        color: '#fff',
        fontFamily: 'Euclid-regular',
        fontSize: 16,
    },
    disabled: {
        backgroundColor: '#C5CEE0',
        borderColor: '#C5CEE0',
    }
})
export const secondary = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#038BFF',
        flex: 1,
        borderRadius: 8,
        maxHeight: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#038BFF',
        fontFamily: 'Euclid-regular',
        fontSize: 16,
    }
})