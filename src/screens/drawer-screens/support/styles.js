import { StyleSheet } from "react-native";
import { theme } from '../../../theme/theme'

export const bubbleStyle = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 9.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: theme.font[400],
        color: '#000',
        lineHeight: 22,
    },
    label: {
        fontSize: 11,
        fontFamily: theme.font[400],
        color: '#949494',
    },
    imageView: {
        width: 47,
        height: 47,
        backgroundColor: '#038BFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textBox: {
        marginLeft: 10,
        justifyContent: 'space-between',
    }
})

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: 30,
        paddingHorizontal: 24,
    }
})