import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
    },
    lable: {
        color: '#222B45',
        fontFamily: theme.font[400],
        fontSize: 12,
    },
    endLabel: {
        color: '#0095FF',
        fontFamily: theme.font[400],
        fontSize: 12,
    },
    lableView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingRight: 16,
        backgroundColor: '#F7F9FC',
        borderColor: '#E4E9F2',
        borderRadius: 8,
        marginTop: 8,
    },
    input: {
        height: '100%',
        marginLeft: 12,
        flex: 1,
        fontSize: 12,
        color: '#000',
        fontFamily: theme.font[400]
    },
    arrow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export const secureStyles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // marginTop: 8,
    },
    progressContainer: {
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    textBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1, paddingLeft: 5,
        fontFamily: theme.font[400],
        fontSize: 14,
        color: '#222B45'
    },
    wick: {
        fontFamily: theme.font[400],
        fontSize: 12,
        color: '#000'
    },
    dot: {
        backgroundColor: '#8F9BB3',
        width: 7,
        height: 7,
        borderRadius: 50,
    },
    progress: {
        // borderWidth: 1,
        flexDirection: 'row',

    },
    progresItem: {
        height: 4,
        width: 48,
        backgroundColor: '#C5CEE0',
        marginHorizontal: 2,
    }
})