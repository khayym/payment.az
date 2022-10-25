import { Image, Text, TextInput, View } from 'react-native'
import CardIcon from '../../../assets/icons/input/cart.svg'
import { styles } from './styles';
import { useState } from 'react'
import { formatCardNumber } from '../../helpers/credit_card_forrmatter'
import { cardImage } from '../../constants/credit'


export const CreditCartInput = ({ number, setNumber }) => {

    const [active, setActive] = useState(false);
    const [iconType, setIconType] = useState(undefined);
    const [error, setError] = useState(false);

    const onBlur = () => {
        setActive(false)
        setError((number.original?.length > 0 && number.original?.length < 19));
    }

    const onChangeNumber = (val) => {
        const { formatedNumber, type, original } = formatCardNumber(val);
        setNumber({ formated: formatedNumber, original })
        setIconType(type)
    }


    return (
        <View style={styles.view}>
            <Text style={styles.label}>Card Number</Text>
            <View style={[styles.container, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <TextInput
                    keyboardType='number-pad'
                    onChangeText={onChangeNumber}
                    value={number.formated}
                    onFocus={() => setActive(true)}
                    onBlur={() => onBlur()} //when you touch outside the textInput this will call
                    placeholder={'Enter Number'}
                    style={styles.input}
                    maxLength={19}
                    placeholderTextColor={'#8F9BB3'}
                />
                {iconType != undefined ? <Image source={cardImage[iconType]} /> : <CardIcon />}
            </View>
            <Text style={[styles.label, { color: '#FF3D71' }]}>{error && '*Invalid card'}</Text>
        </View>
    )
}

