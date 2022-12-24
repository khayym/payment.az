import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { registerStyles as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { PhoneInput } from '../../../components/phone-input';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { REGISTER_API } from '@env';
import { useDispatch } from 'react-redux';
import { controlTabView } from '../../../reducers/tabControllerReducer';

const Registration = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const [number, setNumber] = useState('');
    const [error, setError] = useState({
        code: null,
        message: null
    });
    const [wait, setWait] = useState(false);


    const callback = (index, state) => dispatch(controlTabView({ screen: 'Register', index, state }));
    // const { setRegisterIndex } = useContextApi()

    const buttonHandler = async () => {
        const data = { phone: "994" + number }
        setWait(true)
        setError({ code: null, message: null })
        try {
            const req = await axios.post(REGISTER_API, data);
            req.status == 200 ? callback(1, { number, code: null, errorMessage: null }) : setError({ code: 400, message: t('register:error') })
        } catch (error) {
            if (error.code == 'ERR_BAD_REQUEST') setError({ code: 401, message: t('register:alreadyHave') });
            else if (error.code == 400) setError({ code: 400, message: t('register:error') })
        }
        setWait(false);
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.container}>
                <Texts child={t('register:title')}>{t('register:register')}</Texts>
                <View style={styles.number}>
                    <PhoneInput
                        setNumber={setNumber}
                        number={number}
                        label={t('singIn:numberLable')}
                        errorLabel={error.message}
                        error={error.code}
                    />
                </View>
                <View style={styles.button}>
                    <Button text={t('register:continue')} disable={number.length < 9 || wait} callBack={buttonHandler} wait={wait} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Registration