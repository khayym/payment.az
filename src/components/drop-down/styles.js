import { theme } from "../../theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#E4E9F2',
        backgroundColor: '#F7F9FC',
        borderRadius: 8,
        height: 48,
    },
    text: {
        fontFamily: theme.font[400],
        fontSize: 12,
        color: theme.colors.basic800
    },
    placeholder: {
        fontFamily: theme.font[400],
        fontSize: 12,
        color: theme.colors.basic600
    }
})