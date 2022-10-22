import { useCallback, useRef, useState } from 'react'
import { View, Text, TextInput, Pressable, } from 'react-native'
import DownIcon from '../../../assets/icons/input/arrowDown.svg'
import EditIcon from '../../../assets/icons/input/edit.svg'
import { styles } from './styles'

export const PhoneInput = ({ number, setNumber, label, errorLabel, error, edit }) => {
    const [editedNumber, setEditedNumber] = useState('');
    const [active, setActive] = useState(false);
    const [backIsAction, setBackIsActiove] = useState(false);
    const ref = useRef(null);

    const onChangeNumber = useCallback((num) => {
        if (backIsAction == false) {
            if (num.length < 4) setEditedNumber(num?.replace(/(.{2})/g, '$1 '));
            else if (num.length >= 4 && num.length <= 7) setEditedNumber(num?.replace(/(.{6})/g, '$1 '))
            else if (num.length > 6 && num.length <= 10) setEditedNumber(num?.replace(/(.{9})/g, '$1 '));
            else setEditedNumber(num)
        } else {
            setEditedNumber(num)
        }
        setNumber(num?.replace(/\s/g, ''))
    }, [backIsAction])


    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{label}</Text>
            <View style={[styles.inputContainer, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <Pressable style={styles.arrow} onPress={() => console.log('ssss')}>
                    <Text style={styles.prefix}>+994</Text>
                    <DownIcon />
                </Pressable>
                <TextInput
                    ref={ref}
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    onKeyPress={({ nativeEvent }) => setBackIsActiove(nativeEvent.key === 'Backspace')}
                    value={editedNumber}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)} //when you touch outside the textInput this will call
                    maxLength={12}
                    placeholder="00 000 00 00"
                    keyboardType='number-pad'
                />
                {edit && <Pressable style={styles.arrow} onPress={() => ref?.current?.focus()}>
                    <EditIcon />
                </Pressable>}
            </View>
            {error && <Text style={styles.error}>{errorLabel}</Text>}
        </View>
    )
}

