import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const optionButtonStyles = StyleSheet.create({
    left: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        marginLeft: 12,
        fontFamily: theme.font[500],
        fontSize: 14,
    },
    conatiner: {
        // borderWidth: 1,
        marginVertical: 5,
        borderColor: 'red',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'flex-end'
    },
    view: {
        height: Dimensions.get('window').height / 1.45,
        borderColor: 'blue',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        paddingHorizontal: 23,
    },
    categories: {
        borderColor: 'red'
    },
    imgContainer: {
        position: 'absolute',
        zIndex: 999,
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 8
    },
    logout: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    logtext: {
        marginLeft: 12,
        fontFamily: theme.font[500],
        fontSize: 14,
        color: '#FF4B2B'
    },
})