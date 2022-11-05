import { View, Text, ScrollView } from 'react-native'
import { terms } from '../../../constants/terms';
import { styles } from './styles';

const Policy = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            {
                terms.map(item => (
                    <View style={styles.container} key={item.index}>
                        <Text style={styles.header}>{item.index}. {item.header}</Text>
                        {
                            item.rules.map(texts => (
                                <View style={styles.view} key={texts.bullet}>
                                    <Text style={styles.bullet}>{texts.bullet}</Text>
                                    <Text style={styles.rules}>{texts.text}</Text>
                                </View>
                            ))
                        }
                    </View>
                ))
            }
        </ScrollView>

    )
}

export default Policy


