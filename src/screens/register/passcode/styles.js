import { Dimensions, StyleSheet } from "react-native";
import { moderateScale } from "../../../theme/metrics";
import { theme } from "../../../theme/theme";

export const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {

        marginHorizontal: 5,
        borderRadius: 50,
        width: 10,
        height: 10,
        borderColor: '#038BFF',
        borderWidth: 1,
    },
    back: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        margin: Dimensions.get('window').width * 0.022,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    header: {
        borderColor: 'red'
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'center'
        // marginTop: 30,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },
    text: {
        textAlign: 'center',
        color: '#222B45',
        fontSize: moderateScale(24),
        fontFamily: theme.font[500]
    },
})