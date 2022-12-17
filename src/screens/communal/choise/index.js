import { ActivityIndicator, View } from 'react-native'
import { useEffect, useState } from 'react';
import Field from '../../../components/field'
import SmartHomeIcon from '../../../../assets/icons/payments/communal/smarthome.svg'
import AddHomeIcon from '../../../../assets/icons/payments/communal/add.svg'
import ScanIcon from '../../../../assets/icons/payments/communal/scan.svg';
import FrontIcon from '../../../../assets/icons/front.svg';
import { useDispatch } from 'react-redux';
import { setMonitionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { controlTabView } from '../../../reducers/tabControllerReducer';
import { styles } from './styles';
import { getUserAddressInstance } from '../../../utils/instances';

const Choice = () => {
    const dispatch = useDispatch();
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'ConsumerPayments', index: i, header, state }));

    const [homes, setHomes] = useState([]);
    const [wait, setWait] = useState(true);

    useEffect(() => {
        setWait(true);
        getUserAddressInstance()
            .then(data => setHomes(data))
            .finally(() => setWait(false));

        // console.log(homes);
    }, [])

    return (
        <View style={styles.container}>
            {wait ? <ActivityIndicator size='small' color="#038BFF" />
                : homes?.map((e, key) => <Field
                    text={e.address_title}
                    key={key}
                    callback={() => callback('Mənim mənzilim', 1, e)}
                    left={<SmartHomeIcon />}
                    right={<FrontIcon />}
                    mv={10}
                />)
            }
            <View style={[styles.line, { display: homes.length === 0 && 'none' }]} />
            <Field
                text='Mənzil/ev əlavə et'
                callback={() => callback('Mənzil/ev əlavə et', 2)}
                label={'Başlıq əlavə et'}
                left={<AddHomeIcon />}
                mv={10}
            />
            <Field
                text='Qəbzi scan et'
                callback={() => callback('Qəbzi scan et', 3)}
                label={'Azərişıq, Azərsu, Azəriqaz şirkətləri üçün'}
                left={<ScanIcon />}
                mv={10}
            />
        </View>
    )
}

export default Choice

