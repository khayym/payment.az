import { View, Text, TextInput, Pressable } from 'react-native'
import { useState, useRef, useCallback } from 'react';
import { styles } from './styles';
import EditIcon from '../../../../../assets/icons/input/edit.svg';
import DownIcon from '../../../../../assets/icons/input/arrowDown.svg';


export const NumInput = ({ number, setNumber, label, error, customStyle, onBlur }) => {
    const [editedNumber, setEditedNumber] = useState(number);
    const [active, setActive] = useState(false);
    const [backIsAction, setBackIsActiove] = useState(false);
    const ref = useRef(null);

    const onBlurHandler = () => {
        setActive(false);
        onBlur();
    }

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
        <View style={[styles.container, customStyle]}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.view, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <View style={styles.down}>
                    <Text style={styles.downText}>+994</Text>
                    <DownIcon />
                </View>
                <TextInput
                    onChangeText={onChangeNumber}
                    value={editedNumber}
                    ref={ref}
                    onFocus={() => setActive(true)}
                    onBlur={onBlurHandler} //when you touch outside the textInput this will call
                    style={[styles.input, error && { color: '#FF3D71' }]}
                    onKeyPress={({ nativeEvent }) => setBackIsActiove(nativeEvent.key === 'Backspace')}
                    maxLength={12}
                    placeholder="00 000 00 00"
                    keyboardType='number-pad'
                />
                <Pressable onPress={() => ref?.current?.focus()}>
                    <EditIcon color={error ? "#FF3D71" : active ? '#038BFF' : '#8F9BD3'} />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>Please enter correctly</Text> : null}
        </View>
    )
}


