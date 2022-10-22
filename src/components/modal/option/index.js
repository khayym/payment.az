import { View, Text } from 'react-native'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { styles } from './styles';
import { t } from 'i18next';

const Options = () => {
    const { content } = useSelector(state => state.modalController)

    return (
        <View style={styles.continer}>
            <View style={styles.optionView}>
                <Text style={styles.head}>{content.code[0]}</Text>
                <Text style={styles.text}>{content.code[1]}</Text>
            </View>
            <View style={styles.optionView}>
                <Text style={styles.head}>{t('home:date')}</Text>
                <Text style={styles.text}>{content.date}</Text>
            </View>
            <View style={[styles.optionView, { borderBottomWidth: 0 }]}>
                <Text style={styles.head}>{t('home:amount')}</Text>
                <Text style={styles.text}>{content.amount}₼</Text>
            </View>
        </View>
    )
}

export default memo(Options)

