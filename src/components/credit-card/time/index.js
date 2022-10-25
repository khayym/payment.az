import { Text, TextInput, View } from 'react-native'
import { styles } from '../styles';
import { useRef, useState } from 'react'
import { formatExpiry } from '../../../helpers/credit_card_forrmatter'
import Calendar from '../../../../assets/icons/input/calendar.svg';
import { t } from 'i18next';

export const TimeInput = ({ time, setTime }) => {

    const ref = useRef(null);
    const [active, setActive] = useState(false);
    const [error, setError] = useState(false);


    const onBlur = () => {
        setActive(false)
        setError(time?.length != 7 && time?.length > 0);
    }
    const onChangeNumber = (val) => {
        const formated = formatExpiry(val);
        setTime(formated)
    }


    return (
        <View style={styles.view}>
            <Text style={styles.label}>MM/YY</Text>
            <View style={[styles.container, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <TextInput
                    ref={ref}
                    keyboardType='number-pad'
                    onChangeText={onChangeNumber}
                    value={time}
                    onFocus={() => setActive(true)}
                    onBlur={() => onBlur()} //when you touch outside the textInput this will call
                    placeholder={'MM/YY'}
                    style={styles.input}
                    placeholderTextColor={'#8F9BB3'}
                />
                <Calendar />
            </View>
            <Text style={[styles.label, { color: '#FF3D71' }]}>{error && t('balance:incorrectDate')}</Text>
        </View>
    )
}

