import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 40,
        backgroundColor: '#FBFBFB',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 17,
    },
    input: {
        // borderWidth: 1,
        // borderColor: 'red',
        backgroundColor: '#FBFBFB',
        flex: 1,
        height: "100%",
        marginLeft: 14,
        color: '#0389ff',
        fontSize: 14,
        fontFamily: theme.font[400],
    }
})