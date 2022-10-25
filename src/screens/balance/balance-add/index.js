import { t } from 'i18next';
import { useState } from 'react';
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import BalanceInput from '../../../components/balance-input';
import Button from '../../../components/button';
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view'
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { styles } from './styles';

export const BalanceAdd = () => {

    const [value, setValue] = useState('');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
    const balance = 256;


    const dispatch = useDispatch();
    const callback = (state) => dispatch(setMontionDeterminer({ screen: 'BalanceRouter', value: 1, state: 'Kart məlumatları', number: value }));


    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.headerText}>Balansin artırılması</Text>
            </View>
            <KeyboardAvoidWrapper viewStyle={styles.view} keyboardStyle={styles.view}>
                <View style={styles.bottomBox}>
                    <BalanceInput value={value} setValue={setValue} error={error} />
                    <View style={{ height: 46 }}>
                        <Button text={t('home:continue')} callBack={callback} wait={wait} disable={value == 0 || parseInt(value) > balance || wait} />
                    </View>
                </View>
            </KeyboardAvoidWrapper>
        </View>
    )
}

