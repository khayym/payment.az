import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    back: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        margin: Dimensions.get('window').width * 0.022,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    headText: {
        color: theme.colors.basic800,
        fontSize: 16,
        fontFamily: theme.font[500],
        marginVertical: 12,
        textAlign: 'center',
    },
    dotRoot: {
        borderColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        marginHorizontal: 5,
        borderRadius: 50,
        width: 10,
        height: 10,
        borderColor: '#038BFF',
        borderWidth: 1,
    },
    footer: {
        borderColor: 'purple',
        justifyContent: 'flex-end',
    },
    footerText: {
        color: '#038BFF',
        fontSize: 14,
        fontFamily: theme.font[500],
        marginVertical: 12,
        textAlign: 'center'
    },
    body: {
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
    },
    head: {
        borderColor: 'red',
        alignItems: 'center',
        marginTop: '8%',
    },
    icon: {
        borderColor: 'blue',
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    root: {

        flex: 1,
        padding: 10,
        justifyContent: 'space-around'
    }
})