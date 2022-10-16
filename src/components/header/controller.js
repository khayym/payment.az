import { View, Text } from 'react-native'
import { MainHead } from './main'
import { SecondHead } from './second'
import { styles as controllerStyles } from './styles';
const styles = controllerStyles.controller;

const mainStack = [
    'HomeScreen',
    'PaymentScreen',
    'QrScreen',
    'BalanceScreen',
    'PaymentScreen',
]


export const Controller = ({ route }) => {
    return (
        <View style={styles.container}>
            {mainStack.includes(route) ? <MainHead /> : <SecondHead routeName={route} />}
        </View>
    )
}

