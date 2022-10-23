import { t } from 'i18next';
import { useState } from 'react';
import { View, Text } from 'react-native'
import BalanceInput from '../../../components/balance-input';
import Button from '../../../components/button';
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view'
import { styles } from './styles';

export const BalanceAdd = () => {

    const [value, setValue] = useState('');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
    const balance = 256;

    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.headerText}>Balansin artırılması</Text>
            </View>
            <KeyboardAvoidWrapper viewStyle={styles.view} keyboardStyle={styles.view}>
                <View style={styles.bottomBox}>
                    <BalanceInput value={value} setValue={setValue} error={error} />
                    <View style={{ height: 46 }}>
                        <Button text={t('home:continue')} wait={wait} disable={value == 0 || parseInt(value) > balance || wait} />
                    </View>
                </View>
            </KeyboardAvoidWrapper>
        </View>
    )
}

