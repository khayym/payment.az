import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Icon from '../../../assets/icons/forgotPassword.svg';
import { PhoneInput } from '../../components/phone-input';
import Texts from '../../components/text/'
import Button from '../../components/button'
// import { useContextApi } from '../../store/context/ContextApi';
import { styles } from './styles'


const FotgotPassword = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    // const { setIndex } = useContextApi();
    const buttonHandler = () => {

    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                <Icon />
                <Texts child={t('singIn:forgotPasswordScreenText')} custom={{ marginTop: 48 }}>{t('singIn:forgotPasswordScreenHeader')}</Texts>
                <View style={styles.number}>
                    <PhoneInput
                        setNumber={setNumber}
                        number={number}
                        label={t('singIn:numberLable')}
                        errorLabel={t('singIn:wrongNumber')}
                    />
                </View>
                <View style={styles.button}>
                    <Button text={t('singIn:forgotScreenSend')} disable={number.length < 9} />
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default memo(FotgotPassword)

