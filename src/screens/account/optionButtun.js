import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native'
import Right from '../../../assets/icons/right.svg';
import { optionButtonStyles as styles } from './styles';

const OptionButton = ({ name, href, icon }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={styles.conatiner} onPress={() => navigate(href)}>
            <View style={styles.left}>
                {icon}
                <Text style={styles.text}>{name}</Text>
            </View>
            <Right />
        </TouchableOpacity>
    )
}

export default OptionButton
