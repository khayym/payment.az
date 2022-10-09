import { useTranslation } from 'react-i18next';
import { View, Text, Image, useWindowDimensions } from 'react-native'
import { itemStyles as styles } from './styles';


export const OnBoardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} />
            <Text style={styles.text}>{t(item.title)}</Text>
            <Text style={styles.description} >{t(item.description)}</Text>
        </View>
    )
}
