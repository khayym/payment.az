import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    textWrapper: {
        // flex: 0.10,
        paddingVertical: 25,
        justifyContent: 'center'
    },
    headerText: {
        fontFamily: theme.font[500],
        fontSize: 16,
        color: theme.colors.basic800,
        marginLeft: 24,
    },
    view: {
        flex: 1,
        // borderWidth: 1,
    },
    bottomBox: {
        flex: 1,
        paddingHorizontal: 24,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        backgroundColor: '#ffffff',
        paddingTop: 43,
        paddingBottom: 24,
        justifyContent: 'space-between'
    },

})
