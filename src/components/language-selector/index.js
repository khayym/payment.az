import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native'

const LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'az', label: 'Azerbaijan' },
    { code: 'ru', label: 'Russian' }
];


export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const selectedLanguageCode = i18n.language;

    const setLanguage = code => i18n.changeLanguage(code);

    return (
        <View style={{ borderWidth: 1 }}>
            {
                LANGUAGES.map((language) => {
                    const selectedLanguage = language.code === selectedLanguageCode;

                    return (
                        <TouchableOpacity
                            key={language.code}
                            onPress={() => setLanguage(language.code)}
                            disabled={selectedLanguage}
                        >
                            <Text>{language.label}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
