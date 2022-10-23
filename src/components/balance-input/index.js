import { t } from 'i18next';
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
const balance = 222;


const BalanceInput = ({ value, setValue, error }) => {
    return (
        <View style={styles.inputBox}>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder='0₼'
                    style={styles.input}
                    keyboardType='number-pad'
                />
                <Text style={styles.balance}>{value.length > 0 && '₼'}</Text>
            </View>
            <Text style={styles.text}>{t('home:balance')} {balance}₼</Text>
        </View>
    )
}

export default BalanceInput