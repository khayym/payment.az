import { styles } from './styles';
import { View } from 'react-native';
import InfoBox from '../../components/info-box';
import Button from '../../components/button';
import { t } from 'i18next';


export const BalanceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <InfoBox />
            <Button text={t('balance:addBalance')} callBack={() => navigation.navigate('BalanceRouter')} />
        </View>
    )
}

