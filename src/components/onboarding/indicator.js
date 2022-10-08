import { View } from 'react-native'
import { indicatorStyles as styles } from './styles'

export const Indicator = ({ currentIndex }) => {
    return (
        <View style={styles.container}>
            {
                [...Array(2)].map((_, index) => {
                    return <View
                        key={index}
                        style={[styles.dot, { backgroundColor: index !== currentIndex - 1 ? '#E4E9F2' : '#038BFF' }]}
                    />
                })
            }
        </View>
    )
}
