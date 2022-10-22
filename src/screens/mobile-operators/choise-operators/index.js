import { View } from 'react-native'
import { useDispatch } from 'react-redux';
import FrontIcon from '../../../../assets/icons/front.svg';
import Field from '../../../components/field';
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { choiseStyle as styles } from '../styles';


const ChoiseMobileOperator = ({ jumpTo }) => {

    const dispatch = useDispatch();
    const callback = (state) => dispatch(setMontionDeterminer({ screen: 'MobileOperators', value: 1, state: state }));

    return (
        <View style={styles.box}>
            <Field
                type='image'
                text='Azercell'
                callback={() => callback('Azercell')}
                left={require('../../../../assets/images/screens/operators/azercell.png')}
                right={<FrontIcon />}
                mv={10}
            />
            <Field
                type='image'
                text='Bakcell'
                callback={() => callback('Bakcell')}
                left={require('../../../../assets/images/screens/operators/bakcell.png')}
                right={<FrontIcon />}
                mv={10}
            />

            <Field
                type='image'
                text='Nar Mobile'
                callback={() => callback('Nar Mobile')}
                left={require('../../../../assets/images/screens/operators/nar.png')}
                right={<FrontIcon />}
                mv={10}
            />

        </View >
    )
}

export default ChoiseMobileOperator