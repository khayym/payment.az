import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'
import { styles } from './styles'

const InfoBox = () => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.title}>{t('home:bouns')}:</Text>
                    <Text style={styles.mount}>120.50₼</Text>
                </View>
            </View>
            <View style={{ width: 12, backfaceVisibility: 'hidden' }} />
            <View style={styles.box}>
                <View>
                    <Text style={styles.title}>{t('home:balance')}:</Text>
                    <Text style={styles.mount}>245.60₼</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoBox