import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native'
import { icons } from './icons';
import { styles } from './styles';


export const Box = ({ title, icon, to }) => {
    const { t } = useTranslation();
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => navigate(to)}>
            <View style={styles.iconBox}>
                {icons[icon]}
            </View>
            <Text style={styles.text} numberOfLines={2}>{t(title)}</Text>
        </TouchableOpacity>
    )
}

