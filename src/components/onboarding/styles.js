import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const itemStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 48,
    },
    text: {
        fontSize: 24,
        fontFamily: theme.font[500],
        marginTop: 40,
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        fontFamily: theme.font[400],
        color: '#767676',
        textAlign: 'center'
    },

})

export const onBoardingStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 24,
        backgroundColor: '#fff',
    },
    flatView: {
        // height: Dimensions.get('window').height / 2,
        // flex: 1,

    },
    buttonWrapper: {
        minHeight: 48,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export const indicatorStyles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'center', marginTop: 40, },
    dot: { width: 8, height: 8, borderRadius: 50, marginHorizontal: 3 }
})