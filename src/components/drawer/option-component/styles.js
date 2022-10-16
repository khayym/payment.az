import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    continer: { flexDirection: 'row', alignItems: 'center', marginVertical: 14, },
    text: {
        marginLeft: 14,
        fontFamily: theme.font[400]
    }
})