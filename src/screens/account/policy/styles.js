import { StyleSheet } from "react-native";
import { theme } from '../../../theme/theme';


export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: theme.colors.background
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
    },
    view: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 14,

    },
    bullet: {
        fontSize: 14,
        width: 40,
        color: '#9D96A8',
        fontWeight: '700',
    },
    rules: {
        flex: 1,
        fontSize: 14,
        fontWeight: '400'
    }

})