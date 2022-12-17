import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { View, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import Right from '../../../assets/icons/right.svg';
import { setMonitionDeterminer } from '../../reducers/headerDeterminerReducer';
import { optionButtonStyles as styles } from './styles';

const OptionButton = ({ name, href, icon }) => {
    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    const navigationHanler = () => {
        navigate(href)
        dispatch(setMonitionDeterminer({ screen: href, state: t(name) }))
    }

    return (
        <TouchableOpacity style={styles.conatiner} onPress={navigationHanler}>
            <View style={styles.left}>
                {icon}
                <Text style={styles.text}>{t(name)}</Text>
            </View>
            <Right />
        </TouchableOpacity>
    )
}

export default OptionButton
