import { StyleSheet } from 'react-native'
import { theme } from '../../../theme/theme'

export const styles = StyleSheet.create({
    inner: {
        flex: 1,
        alignItems: 'center',
    },
    textContainer: {
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 49,
        marginBottom: 56,
    },
    buttonGroup: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between'
    },
    sendAgainTextRoot: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
        marginBottom: 10,
    },
    cell: {
        width: 40,
        height: 48,
        lineHeight: 45,
        fontSize: 20,
        color: '#038BFF',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#F7F9FC',
        borderColor: '#E4E9F2',
        textAlign: 'center',
        fontFamily: theme.font[500],
    },
    focusCell: {
        borderColor: '#038BFF'
    },
    wrongOpt: {
        alignSelf: 'center', marginTop: 10, color: 'red'
    },
    textRoot: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },
    text: {
        color: '#2E3A59',
        fontFamily: theme.font[400],
        fontSize: 14,
        marginLeft: 5,
    },
    textDisable: {
        color: theme.colors.basic600
    },
    blueText: {
        color: '#0095FF',
        fontFamily: theme.font[400],
        fontSize: 14,
        marginLeft: 7,
    },
    buttonView: {
        height: 48,
        width: '100%',
    },
    flex: {
        flex: 1,
    }
})
