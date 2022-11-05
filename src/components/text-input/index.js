import { View, Text, TextInput, Pressable } from 'react-native'
import { useState, useRef } from 'react';
import { styles } from './styles';
import EditIcon from '../../../assets/icons/input/edit.svg';

export const Input = ({ value, setValue, label, error, customStyle, placeholder, onBlur }) => {

    const [active, setActive] = useState(false);
    const ref = useRef(null);

    const onBlurHandler = () => {
        setActive(false);
        onBlur();
    }

    return (
        <View style={[styles.container, customStyle]}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.view, active && { borderColor: '#038BFF' }, error && { borderColor: '#FF3D71' }]}>
                <TextInput
                    onChangeText={setValue}
                    value={value}
                    ref={ref}
                    onFocus={() => setActive(true)}
                    onBlur={onBlurHandler} //when you touch outside the textInput this will call
                    style={[styles.input, error && { color: '#FF3D71' }]}
                    placeholder={placeholder}
                    autoComplete={false}
                    autoCapitalize={false}
                    autoCorrect={false}
                />
                <Pressable onPress={() => ref?.current?.focus()}>
                    <EditIcon color={error ? "#FF3D71" : active ? '#038BFF' : '#8F9BD3'} />
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>Please enter correctly</Text> : null}
        </View>
    )
}


