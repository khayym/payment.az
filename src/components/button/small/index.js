import { Text, StyleSheet, TouchableOpacity } from 'react-native'

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
        width: 72,
        borderRadius: 8,
        maxHeight: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#038BFF',
        fontFamily: 'Euclid-regular',
        fontSize: 14,
    }
})