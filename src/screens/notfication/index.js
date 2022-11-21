import { View, ScrollView } from 'react-native'
import Filed from './filed'
import { styles } from './styles'
import Navbar from './navbar'

export const Notification = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView style={styles.filedView} showsVerticalScrollIndicator={false}>
                <Filed />
                <Filed />
                <Filed />
                <Filed />
                <Filed />
                <Filed />
                <Filed />
                <Filed />
            </ScrollView>
        </View>
    )
}

