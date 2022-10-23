import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer';

export const CardInfo = () => {

    const dispatch = useDispatch();
    const callback = () => dispatch(setMontionDeterminer({ screen: 'BalanceRouter', value: 2 }));

    return (
        <View>
            <Text>CardInfo</Text>
        </View>
    )
}

