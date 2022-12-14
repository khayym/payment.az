import { StyleSheet } from "react-native";
import { theme } from '../../theme/theme'

export const styles = StyleSheet.create({
    container: {
        height: 48,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: theme.font[500],
        fontSize: 16,
    },
    label: {
        color: theme.colors.basic600,
        fontFamily: theme.font[400],
        fontSize: 12,
    },
    leftImgContainer: {
        height: '100%',
        width: 48,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    left: {
        height: '100%',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 800,
        borderWidth: 0.1,
        borderColor: '#0000004d',
        resizeMode: 'contain'
    },
    textContainer: {
        textAlign: 'center',
        marginHorizontal: 12,
    }
})