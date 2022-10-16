import { StyleSheet } from "react-native";
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box: {
        height: 72,
        backgroundColor: '#fff',
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 12,
        fontFamily: theme.font[400],
        color: '#000',
    },
    mount: {
        fontFamily: theme.font[600],
        fontSize: 24,
        color: '#000',

    }
})