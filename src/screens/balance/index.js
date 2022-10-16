import { View } from 'react-native'
import Button from '../../components/button'
import InfoBox from '../../components/info-box'
import { styles } from './styles';


export const BalanceScreen = () => {
    return (
        <View style={styles.container}>
            <InfoBox />
            <Button text='Banasi artir' />
        </View>
    )
}

