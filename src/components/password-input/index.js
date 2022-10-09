import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native'
import HideIcon from '../../../assets/icons/input/hide.svg'
import ShowIcon from '../../../assets/icons/input/show.svg'
import SecureType from './secureType'
import { styles } from './styles'

export const PasswordInput = ({ label, custom, rightLabel, rightLabelText, rightLabelCallback, withSecure, ready, setReady, setText, text }) => {

    const [active, setActive] = useState(false);
    const [show, setShow] = useState(true);

    const { t } = useTranslation();

    return (
        <View style={[styles.container, custom && custom]}>
            <View style={styles.lableView}>
                <Text style={styles.lable}>{label}</Text>
                {rightLabel && <TouchableOpacity onPress={() => rightLabelCallback()}>
                    <Text style={styles.endLabel}>{rightLabelText}</Text>
                </TouchableOpacity>
                }
            </View>
            <View style={[styles.inputContainer, active && { borderColor: '#038BFF' }]}>
                <TextInput
                    // ref={ref}
                    style={[styles.input]}
                    onChangeText={setText}
                    placeholderTextColor='#8F9BB3'
                    value={text}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)} //when you touch outside the textInput this will call
                    maxLength={30}
                    placeholder={t('singIn:passwordInputPleaceholder')}
                    secureTextEntry={show}
                />
                <Pressable style={styles.arrow} onPress={() => setShow(!show)}>
                    {show ? <HideIcon /> : <ShowIcon />}
                </Pressable>
            </View>
            <SecureType text={text} setReady={setReady} withSecure={withSecure} />
        </View>
    )
}
