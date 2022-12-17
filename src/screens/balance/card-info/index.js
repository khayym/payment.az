import { useState } from 'react';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/button';
import { CreditCartInput } from '../../../components/credit-card';
import { CvvInput } from '../../../components/credit-card/cvv';
import { TimeInput } from '../../../components/credit-card/time';
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view';
// import { setMonitionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { styles } from './styles'
import { modalVisiblityController, setModalContent } from '../../../reducers/modalControllerReducer';
import { t } from 'i18next';

export const CardInfo = () => {
    const dispatch = useDispatch();
    const [wait, setWait] = useState(false);
    const mount = useSelector(state => state.headerMonitionIndexes.BalanceRouter.number)

    const callback = () => {
        setWait(true);
        setTimeout(() => {
            dispatch(setModalContent({
                status: true,
                screen: 'BalanceRouter',
                content: {
                    code: t("balance:cardNumber"),
                    value: `${number.formated.slice(0, 9)} **** ****`,
                    amount: mount,
                    organization: 'Balanca artirilmasi',
                    group: "Other",
                    image: 'balance',
                }
            }))
            setWait(false);
            dispatch(modalVisiblityController())
        }, 1000)
    };

    const [number, setNumber] = useState({ formated: null, original: null });
    const [cvv, setCvv] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <KeyboardAvoidWrapper viewStyle={{ flex: 1 }} keyboardStyle={styles.container}>
            <View style={styles.view}>
                <View>
                    <CreditCartInput number={number} setNumber={setNumber} />
                    <View style={styles.bottomInputs}>
                        <TimeInput time={time} setTime={setTime} />
                        <View style={styles.space} />
                        <CvvInput cvv={cvv} setCvv={setCvv} />
                    </View>
                </View>
                <Button text={t('balance:addBalance')} callBack={callback} wait={wait} disable={wait || !time || !cvv || !number} />
            </View>
        </KeyboardAvoidWrapper>
    )
}

