import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 25,
        backgroundColor: theme.colors.background
    },
    imgContainer: {
        // borderWidth: 1,
        alignItems: 'center',
        marginBottom: 36,
    },
    icon: {
        position: 'absolute',
        bottom: 0,
        right: 0,

    },
})