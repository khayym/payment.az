import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native'
import { icons } from './icons';
import { styles } from './styles';

const navHrefs = {
    'neqliyyat': 'Transportation',
    'kommunal': 'ConsumerPayments',
    telefon: 'TelephonePayments',
    internet: 'InternetPayments',
    banklar: 'BankPayments',
    tehsil: 'EducationPayments',
    televizor: 'TvPayments',
    eylence: 'Entertainment',
    sigorta: 'Insurance',
    mobil_operatorlar: 'MobileOperators'
}

// export const Box = ({ title, icon, to }) => {
export const Box = ({ item, index }) => {
    const { t } = useTranslation();
    const { navigate } = useNavigation();
    // console.log(item.category_link, '---> ', navHrefs[item.category_link])
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => navigate(navHrefs[item.category_link])}>
            <View style={styles.iconBox}>
                {icons[item.title]}
            </View>
            <Text style={styles.text} numberOfLines={2}>{t(`home:${item.category_link}`)}</Text>
        </TouchableOpacity>
    )
}

