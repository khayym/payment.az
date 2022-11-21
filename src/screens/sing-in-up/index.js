import { useTranslation } from 'react-i18next'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button'
import { styles } from './styles';

const SignInUp = ({ navigation }) => {
    const { t } = useTranslation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.view} >
                    <Image source={require('../../../assets/paymentaz-logo.png')} style={styles.img} resizeMode='contain' />
                    <Text style={styles.title}>{t('welcome:singInHeadText')}</Text>
                    <Text style={styles.text}>{t('welcome:singInContent')}</Text>
                </View>
                <View style={styles.buttons} >
                    <Button text={t('welcome:registerButton')} callBack={() => navigation.navigate('SingRegisterRouter', { index: 1 })} />
                    <Text style={[styles.text, { marginVertical: 12 }]}>{t('welcome:or')}</Text>
                    <Button text={t('welcome:loginButton')} variant='secondary' callBack={() => navigation.navigate('SingRegisterRouter', { index: 0 })} />
                </View>
                <Text style={styles.help}>{t('welcome:help')}</Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInUp

