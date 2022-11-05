import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: '100%',
        marginRight: 10,
        fontSize: 12,
        fontFamily: theme.font[400],
        color: theme.colors.basic800,
    },
    view: {
        alignItems: 'center',
        height: 48,
        backgroundColor: theme.colors.basic200,
        borderColor: theme.colors.basic400,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    container: {
        // marginTop: 50,
    },
    errorText: {
        fontFamily: theme.font[400],
        fontSize: 12,
        color: theme.colors.danger500,
    },
    label: {
        fontSize: 12,
        fontFamily: theme.font[400],
        color: theme.colors.basic800,
    }
})