import { useState } from 'react';
import { Keyboard, Pressable, TextInput, View } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import SearchIcon from '../../../assets/icons/box/search.svg';
import { useTranslation } from 'react-i18next';
import { styles } from './styles'

export const Search = ({ text, setText }) => {

    const { t } = useTranslation();
    const [focused, setFocused] = useState(false);

    const closeView = (order) => {
        order && setText(null)
        setFocused(false)
        Keyboard.dismiss()
    }

    return (
        <View style={[styles.container, focused && { borderColor: '#0389ff66' }]}>

            {text ?
                <Pressable hitSlop={15} onPressOut={() => closeView(true)} style={{ width: 24, }}>
                    <AntDesign name="close" size={20} color="#0389ff66" />
                </Pressable>
                : <SearchIcon color={focused ? '#0389ff66' : '#C0C0C0'} />
            }

            <TextInput
                autoCapitalize={false}
                autoCorrect={false}
                onFocus={() => setFocused(true)}
                onEndEditing={() => closeView()}
                style={styles.input}
                onBlur={() => closeView()}
                onChangeText={(text) => setText(text)}
                placeholder={t('home:searchPleasceholder')}
                placeholderTextColor='#B0C0D0'
                value={text}
            />
        </View>
    )
}


