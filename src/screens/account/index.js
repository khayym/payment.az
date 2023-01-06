import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OptionButton from './optionButtun';
import LogoutIcon from '../../../assets/icons/profile/logout.svg'
import { styles } from './styles';
import { OPTIONS } from '../../constants/profile';
import { cleanMMKV } from '../../utils/mmkv';
import { useState } from 'react';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../reducers/modalControllerReducer';
import { setLogin } from '../../reducers/userReducer';

export const AccountScreen = () => {
    const position = Dimensions.get('window').height / 1.45 - useSafeAreaInsets().bottom - 20
    const margin = (position * 14) / 100
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const handleLogOut = async () => {
        await cleanMMKV();
        dispatch(clearHistory())
        dispatch(setLogin(false));
    }

    return (
        <View style={styles.container}>
            <View style={[styles.imgContainer, { bottom: position }]}>
                <Image source={image ? { uri: image } : require('../../../assets/images/user.png')} />
                <Text style={styles.title}>Khayyam Karimov</Text>
            </View>
            <View style={[styles.view, { paddingTop: margin }]}>
                {
                    OPTIONS.map((item, i) => <OptionButton {...item} key={i} />)
                }
                <TouchableOpacity style={styles.logout} onPress={handleLogOut}>
                    <LogoutIcon color="#FF4B2B" />
                    <Text style={styles.logtext}>{t('profile:logOut')}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

