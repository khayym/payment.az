import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const setNumbersStyles = StyleSheet.create({
    keyboard: { flex: 1 },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff', paddingHorizontal: 24,
        paddingVertical: 14,
    },
    buttonView: {
        height: 48
    }
})

export const styles = StyleSheet.create({
    tabView: {
        backgroundColor: '#f8f9fc',
        flex: 1,

    },
    container: {
        flex: 1,
    }
})


export const choiseStyle = StyleSheet.create({
    box: {
        flex: 1, backgroundColor: '#fff', paddingHorizontal: 24,
        paddingVertical: 14,
    }
})

export const confirmStyles = StyleSheet.create({
    box: {
        flex: 0.20,
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    keyboard: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    bottomBox: {
        flex: 1,
        paddingHorizontal: 24,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        backgroundColor: '#ffffff',
        paddingTop: 5,
        paddingBottom: 24,
        justifyContent: 'space-between'
    },
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