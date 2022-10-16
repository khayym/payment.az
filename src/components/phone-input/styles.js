import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {


    },
    error: {
        color: '#222B45',
        fontFamily: theme.font[400],
        fontSize: 12,
        marginTop: 8,
        color: '#FF3D71'
    },
    prefix: {
        fontFamily: theme.font[400],
        fontSize: 12,
        marginRight: 5,
    },
    lable: {
        color: '#222B45',
        fontFamily: theme.font[400],
        fontSize: 12,
    },
    inputContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        paddingHorizontal: 16,
        backgroundColor: '#F7F9FC',
        borderColor: '#E4E9F2',
        borderRadius: 8,
        marginTop: 8,
    },
    input: {
        // height: 40,
        marginLeft: 12,
        flex: 1,
        height: '100%',
        // padding: 10,
        fontSize: 12,
        color: '#000000',
        fontFamily: theme.font[400],

    },
    arrow: {
        // width: 24,
        // height: 24,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
