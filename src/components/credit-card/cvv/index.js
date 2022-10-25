import { Text, TextInput, View } from 'react-native'
import { styles } from '../styles';
import { useState } from 'react'
import CvvIcon from '../../../../assets/icons/input/cvv.svg';

export const CvvInput = ({ cvv, setCvv }) => {
    const [active, setActive] = useState(false);
    const [error, setError] = useState(false);


    const onBlur = () => {
        setActive(false)
        setError(cvv?.length != 3 && cvv?.length > 0)
    }



    return (
        <View style={styles.view}>
            <Text style={styles.label}>CVV</Text>
            <View style={[styles.container, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <TextInput
                    keyboardType='number-pad'
                    onChangeText={setCvv}
                    value={cvv}
                    onFocus={() => setActive(true)}
                    onBlur={() => onBlur()} //when you touch outside the textInput this will call
                    placeholder={'CVV'}
                    style={styles.input}
                    maxLength={3}
                    placeholderTextColor={'#8F9BB3'}
                />
                <CvvIcon />
            </View>
            <Text style={[styles.label, { color: '#FF3D71' }]}>{error && '*Invalid cvv'}</Text>
        </View>
    )
}

