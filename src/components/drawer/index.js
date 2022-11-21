import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles';
import { OptionComponent } from './option-component'

const CustomDrawer = () => {
    const { t, i18n } = useTranslation();
    const setLanguage = code => i18n.changeLanguage(code);
    return (
        <View style={styles.container}>
            <View>
                <OptionComponent icon='light' text={t('drawer:light')} to='Payment' />
                <OptionComponent icon='support' text={t('drawer:support')} to='Support' />
                <OptionComponent icon='setting' text={t('drawer:settings')} to='Account' />
                <OptionComponent icon='info' text={t('drawer:info')} to='Account' />
                <OptionComponent icon='warning' text={t('drawer:debts')} to='Payment' />
                <OptionComponent icon='time' text={t('drawer:history')} to='Payment' />
            </View>
            <View style={styles.langContainer}>
                <Pressable onPress={() => setLanguage('az')} style={styles.langPressable} ><Text style={[styles.leng, i18n.language == 'az' && { color: '#000' }]}>AZ</Text></Pressable>
                <Pressable onPress={() => setLanguage('en')} style={styles.langPressable}>
                    <Text style={[styles.leng, i18n.language == 'en' && { color: '#000' }]}>
                        EN
                    </Text>
                </Pressable>
                <Pressable onPress={() => setLanguage('ru')} style={styles.langPressable} ><Text style={[styles.leng, i18n.language == 'ru' && { color: '#000' }]}>RU</Text></Pressable>
            </View>
        </View>
    )
}

export default CustomDrawer

