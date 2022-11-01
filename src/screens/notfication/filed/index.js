import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native'
import NextIcon from '../../../../assets/icons/next.svg';
import { styles } from './styles';

const Filed = () => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigate('NewsExplorer')} activeOpacity={0.6}>
            <View style={styles.dot} />
            <View style={styles.view}>
                <Text style={styles.text}>Möhtəşəm xəbər</Text>
                <Text style={styles.label}>Lorem ipsum dolor sit amet, consectetur </Text>
                <Text style={styles.date}>24 iyul 2022, 15:01</Text>
            </View>
            <NextIcon />
        </TouchableOpacity>
    )
}

export default Filed

