import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { View, Text, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../../../assets/icons/modal/fail.svg';
import X from '../../../../assets/icons/x.svg';
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { modalVisiblityController } from '../../../reducers/modalControllerReducer';
import Button from '../../button';
import { styles } from './styles';

const Fail = () => {
    const { screen } = useSelector(state => state.modalController)

    const dispatch = useDispatch();
    const { goBack } = useNavigation()
    const okButtonHandler = () => {
        dispatch(setMontionDeterminer({ screen, value: 0 }))
        dispatch(modalVisiblityController());
        goBack()
    }

    const tryAgainHandler = () => {
        dispatch(setMontionDeterminer({ screen, value: 1, state: null }))
        dispatch(modalVisiblityController());
    }

    return (
        <View style={styles.continer}>
            <Pressable style={styles.icon} hitSlop={20} onPress={() => dispatch(modalVisiblityController())}>
                <X />
            </Pressable>
            <View style={styles.view}>
                <Icon />
                <Text style={styles.text}>{t('home:fail')}</Text>
                <Text style={styles.subText}>{t('home:failPay')}</Text>
            </View>
            <View style={styles.buttons}>
                <Button text={t('home:tryAgain')} variant='secondary' callBack={tryAgainHandler} />
                <Button text={t('home:end')} callBack={okButtonHandler} />
            </View>
        </View>
    )
}

export default Fail

