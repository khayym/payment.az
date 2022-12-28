import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonView: {
        height: 48,
        marginTop: 48,
    },
    root: {
        flex: 1,
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    codeFieldRoot: {
        marginTop: 56,
        paddingHorizontal: 24,
    },
    cell: {
        width: 40,
        height: 48,
        lineHeight: 45,
        fontSize: 20,
        borderWidth: 1,
        color: '#038BFF',
        borderRadius: 8,
        backgroundColor: '#F7F9FC',
        borderColor: '#E4E9F2',
        textAlign: 'center',
        fontFamily: theme.font[500],
    },
    focusCell: {
        borderColor: '#038BFF'
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
    },
    blueText: {
        color: '#0095FF',
        fontFamily: theme.font[400],
        fontSize: 14,
        marginLeft: 7,
    },
    wrongOpt: {
        alignSelf: 'center',
        marginTop: 10,
        color: 'red',
        textAlign: 'center'
    },
    textDisable: {
        color: theme.colors.basic600
    },
});