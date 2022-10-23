import { styles } from './styles';
import { View } from 'react-native';
import InfoBox from '../../components/info-box';
import Button from '../../components/button';


export const BalanceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <InfoBox />
            <Button text='Banasi artir' callBack={() => navigation.navigate('BalanceRouter')} />
        </View>
    )
}

