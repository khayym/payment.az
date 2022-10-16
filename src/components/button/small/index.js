import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { theme } from '../../../theme/theme';

export const SmallButton = ({ text, callBack, disable }) => {
    return (
        <TouchableOpacity onPress={callBack} style={[secondary.container]} disabled={disable} activeOpacity={0.6} >
            <Text style={[secondary.text]}>{text}</Text>
        </TouchableOpacity>
    )
}


export const secondary = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#038BFF',
        height: 32,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#038BFF',
        fontFamily: theme.font[600],
        alignSelf: 'center',
        fontSize: 14,
        paddingHorizontal: 21,
        // paddingVertical: ,
    }
})