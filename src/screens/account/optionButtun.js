import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import Right from '../../../assets/icons/right.svg';
import { setMontionDeterminer } from '../../reducers/headerDeterminerReducer';
import { optionButtonStyles as styles } from './styles';

const OptionButton = ({ name, href, icon }) => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    const navigationHanler = () => {
        navigate(href)
        dispatch(setMontionDeterminer({ screen: href, state: name }))
    }

    return (
        <TouchableOpacity style={styles.conatiner} onPress={navigationHanler}>
            <View style={styles.left}>
                {icon}
                <Text style={styles.text}>{name}</Text>
            </View>
            <Right />
        </TouchableOpacity>
    )
}

export default OptionButton
