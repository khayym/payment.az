import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
    container: {
        flex: 1
    },
    inputs: {
        marginTop: 56,
    },
    header: {
    },
    error: {
        fontFamily: theme.font[400],
        fontSize: 12,
        marginTop: 8,
        color: '#FF3D71'
    },
})