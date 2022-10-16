import { useNavigation } from '@react-navigation/native';
import { Text, Pressable } from 'react-native'
import Info from '../../../../assets/icons/drawer/info.svg';
import Light from '../../../../assets/icons/drawer/light.svg';
import Setting from '../../../../assets/icons/drawer/setting.svg';
import Support from '../../../../assets/icons/drawer/support.svg';
import Time from '../../../../assets/icons/drawer/time.svg';
import Warning from '../../../../assets/icons/drawer/warning.svg';
import { styles } from './styles';

const icons = {
    info: <Info />,
    light: <Light />,
    setting: <Setting />,
    support: <Support />,
    time: <Time />,
    warning: <Warning />
}

export const OptionComponent = ({ icon, text, to }) => {
    const { navigate } = useNavigation();
    return (
        <Pressable style={styles.continer} onPressOut={() => navigate(to)}>
            {icons[icon]}
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

