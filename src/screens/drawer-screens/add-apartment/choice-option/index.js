import { View } from 'react-native'
import { styles } from '../add/styles'
import Field from '../../../../components/field'
import FrontIcon from '../../../../../assets/icons/front.svg';
import { useDispatch, useSelector } from 'react-redux';
import { controlTabView } from '../../../../reducers/tabControllerReducer';


const ChoiceOption = () => {

    const dispatch = useDispatch();
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'AddApartment', index: i, header, state }));
    const state = useSelector(state => state.tabControllerReducer['AddApartment'].state);


    return (
        <View style={[styles.container, { justifyContent: 'flex-start' }]}>
            <Field
                type='image'
                text='Azərişıq'
                callback={() => callback('Azərişıq', 3, { ...state, category_id: 1 })}
                left={require('../../../../../assets/images/communal/azerisiq.png')}
                right={<FrontIcon />}
                mv={10}
            />
            <Field
                type='image'
                text='Azəriqaz'
                left={require('../../../../../assets/images/communal/azerqaz.png')}
                right={<FrontIcon />}
                mv={10}
            />
            <Field
                type='image'
                text='Azərisu'
                left={require('../../../../../assets/images/communal/azersu.png')}
                right={<FrontIcon />}
                mv={10}
            />
        </View>
    )
}

export default ChoiceOption