import { View, Text } from 'react-native'
import React from 'react'
import Field from '../../../components/field'
import { useSelector } from 'react-redux'
import { confirmStyles as styles } from '../styles';
import Button from '../../../components/button';
const operators = {
    Azercell: require(`../../../../assets/images/screens/operators/azercell.png`),
    Bakcell: require(`../../../../assets/images/screens/operators/bakcell.png`),
    'Nar Mobile': require(`../../../../assets/images/screens/operators/nar.png`),
}

const ConfirmMobileOperaion = () => {
    const { number, state } = useSelector(state => state.headerMontionIndexes.MobileOperators)

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.box}>
                <Field
                    type='image'
                    text={`+994 ${number?.slice(0, 2)} ${number?.slice(3, 6)} ${number?.slice(6, 8)} ${number?.slice(7, 9)}`}
                    // callback={() => callback('Azercell')}
                    left={operators[state]}
                    // right={<FrontIcon />}
                    mv={10}
                />
            </View>
            <View style={{ borderWidth: 1, flex: 1, paddingHorizontal: 24, borderTopLeftRadius: 48, borderTopRightRadius: 48, backgroundColor: 'red', }}>
                <View style={{ height: 46, }}>
                    <Button text='asd' />
                </View>
            </View>
        </View>
    )
}

export default ConfirmMobileOperaion