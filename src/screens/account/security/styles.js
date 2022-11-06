import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 32,
        paddingTop: 32,
    },
    avoid: {
        flex: 1,
        marginTop: 32,

    },
    text: {
        fontFamily: theme.font[600],
        fontSize: 24,
        color: theme.colors.basic800,
        textAlign: 'center'
    }
})