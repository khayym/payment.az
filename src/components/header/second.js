import { View, Text, Pressable } from 'react-native'
import { styles as secondStyles } from './styles';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../../assets/icons/drawer/back.svg';

const styles = secondStyles.second;

export const SecondHead = ({ routeName }) => {
    const navigation = useNavigation();
    // (routeName)console.log
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} hitSlop={15}>
                <BackIcon color="#000" />
            </Pressable>
            <Text style={styles.text}>{t(`secsNames:${routeName}`)}</Text>
            <View style={{ width: 24 }} />
        </View>
    )
}
