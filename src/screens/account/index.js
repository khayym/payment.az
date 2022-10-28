import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OptionButton from './optionButtun';
import LogoutIcon from '../../../assets/icons/profile/logout.svg'
import { styles } from './styles';
import { OPTIONS } from '../../constants/profile';


export const AccountScreen = () => {
    const position = Dimensions.get('window').height / 1.45 - useSafeAreaInsets().bottom - 20
    const martgin = (position * 14) / 100


    return (
        <View style={styles.container}>
            <View style={[styles.imgContainer, { bottom: position }]}>
                <Image source={require('../../../assets/images/user.png')} />
                <Text style={styles.title}>Khayyam Karimov</Text>
            </View>
            <View style={[styles.view, { paddingTop: martgin }]}>
                {
                    OPTIONS.map((item, i) => <OptionButton {...item} key={i} />)
                }
                <TouchableOpacity style={styles.logout}>
                    <LogoutIcon />
                    <Text style={styles.logtext}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

