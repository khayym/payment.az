import { useEffect, useState } from 'react'
import { ActivityIndicator, View, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import SmartHomeIcon from '../../../../../assets/icons/payments/communal/smarthome.svg'
import AddHomeIcon from '../../../../../assets/icons/payments/communal/add.svg'
import ScanIcon from '../../../../../assets/icons/payments/communal/scan.svg';
import FrontIcon from '../../../../../assets/icons/front.svg';
import Field from '../../../../components/field'
import { styles } from './styles';
import { getUserAddressInstance } from '../../../../utils/instances'
import { cleanTabViewState, controlTabView } from '../../../../reducers/tabControllerReducer'

const Initial = () => {
    const dispatch = useDispatch();
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'AddApartment', index: i, header, state }));
    let initialState = { address_title: "", full_address: "", titleError: false, addressError: false, subscriber_code: "", category_id: null, child_category_id: null }
    const [userApartment, setUserApartment] = useState({
        apartments: [],
        loading: false,
        error: null
    })


    useEffect(() => {
        setUserApartment(state => ({ ...state, loading: true }));
        dispatch(cleanTabViewState({ screen: 'AddApartment' }))
        getUserAddressInstance()
            .then(data => setUserApartment({ error: null, loading: false, apartments: data }))
            .catch(error => setUserApartment({ error, loading: false, apartments: [] }))
    }, [])

    return (
        <ScrollView style={styles.container}>
            {userApartment.loading ? <ActivityIndicator size='small' color="#038BFF" />
                : userApartment.apartments.map((e, key) => <Field
                    text={e.address_title}
                    key={key}
                    // callback={() => callback(e.address_title, 0, e)}
                    left={<SmartHomeIcon />}
                    right={<FrontIcon />}
                    mv={10}
                />)
            }
            <View style={[styles.line, { display: userApartment.loading || userApartment.error && 'none' }]} />
            <Field
                text='M??nzil/ev ??lav?? et'
                callback={() => callback('M??nzil/ev ??lav?? et', 1, initialState)}
                label={'Ba??l??q ??lav?? et'}
                left={<AddHomeIcon />}
                mv={10}
            />
            <Field
                text='Q??bzi scan et'
                // callback={() => callback('Q??bzi scan et', 3)}
                label={'Az??ri????q, Az??rsu, Az??riqaz ??irk??tl??ri ??????n'}
                left={<ScanIcon />}
                mv={10}
            />
        </ScrollView>
    )
}

export default Initial  