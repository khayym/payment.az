import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: '100%',
        marginRight: 10,
        color: theme.colors.basic900,
        fontFamily: theme.font[400],
        fontSize: 12,
    },
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48,
        backgroundColor: theme.colors.basic200,
        borderColor: theme.colors.basic400,
        borderRadius: 8,
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 8,
    },
    view: {
        // marginTop: 50,
        flexGrow: 1,
    },
    label: {
        color: theme.colors.basic700,
        fontSize: 12,
        fontFamily: theme.font[400],
    }
})