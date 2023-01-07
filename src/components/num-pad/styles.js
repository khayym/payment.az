import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 22,
        fontFamily: theme.font[600]
    },
    container: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        borderWidth: 1,
        margin: Dimensions.get('window').width * 0.023,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#038BFF',
        borderColor: '#acb4c46e',
        borderRadius: 100,
    },
})