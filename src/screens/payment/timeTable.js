import { View, Text, StyleSheet } from 'react-native'
import { theme } from '../../theme/theme'

export const TimeTable = ({ amount, time }) => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.amount}>-{amount}₼</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'flex-end'
    },
    time: {
        fontSize: 12,
        fontFamily: theme.font[400],
        color: theme.colors.basic600

    },
    amount: {
        fontFamily: theme.font[500],
        fontSize: 16,
    }
})

