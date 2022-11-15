import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    text: {
        fontFamily: theme.font[500],
        fontSize: 20,
        color: '#000',
        padding: 20,
    },
    view: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    time: {
        fontFamily: theme.font[500],
        fontSize: 20,
        paddingTop: 19,
        paddingBottom: 11,
    },
    emptyText: {
        // borderWidth: 1,
        textAlign: 'center',
        marginTop: "50%",
        fontSize: 20,
        color: theme.colors.basic600,
    }
})