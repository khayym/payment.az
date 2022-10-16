import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingBottom: 52,
        flexDirection: 'column',
        paddingTop: 10,
        flex: 1,
        justifyContent: 'space-between',

    },
    language: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    leng: {
        color: theme.colors.basic600,
        fontFamily: theme.font[500],
        fontSize: 16,

    },
    langPressable: {
        marginHorizontal: 15,
    },
    langContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
})