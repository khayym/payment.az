import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native'
import SecureType from './secureType'
import { styles } from './styles'
import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const PasswordInput = ({ label, custom, rightLabel, rightLabelText, rightLabelCallback, withSecure, ready, setReady, setText, text }) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [active, setActive] = useState(false);
    const ref = useRef(null);

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
                    ref={ref}
                    style={[styles.input]}
                    onChangeText={setText}
                    placeholderTextColor='#8F9BB3'
                    value={text}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)} //when you touch outside the textInput this will call
                    maxLength={30}
                    enablesReturnKeyAutomatically
                    placeholder={t('singIn:passwordInputPleaceholder')}
                    secureTextEntry={passwordVisibility}
                />
                <Pressable style={styles.arrow} onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#2E3A59" />
                </Pressable>
            </View>
            <SecureType text={text} setReady={setReady} withSecure={withSecure} />
        </View>
    )
}
