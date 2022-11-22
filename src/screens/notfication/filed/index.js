import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native'
import NextIcon from '../../../../assets/icons/next.svg';
import { styles } from './styles';

const Filed = ({ title, content, created_at, cover_image }) => {
    const { navigate } = useNavigation();



    return (
        <TouchableOpacity style={styles.container} onPress={() => navigate('NewsExplorer', {
            title,
            content,
            created_at,
            cover_image
        })} activeOpacity={0.6}>
            <View style={styles.dot} />
            <View style={styles.view}>
                <Text style={styles.text} numberOfLines={2}>{title}</Text>
                <Text style={styles.label} numberOfLines={1}>{content}</Text>
                <Text style={styles.date}>{created_at}</Text>
            </View>
            <NextIcon />
        </TouchableOpacity>
    )
}

export default Filed

