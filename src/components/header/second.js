import { View, Text, Pressable } from 'react-native'
import { styles as secondStyles } from './styles';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../../assets/icons/drawer/back.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { setMonitionDeterminer } from '../../reducers/headerDeterminerReducer';
import { tabViewBackController } from '../../reducers/tabControllerReducer';

const styles = secondStyles.second;

export const SecondHead = ({ routeName }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const index = useSelector(state => state.tabControllerReducer[routeName]?.index)
    const header = useSelector(state => state.tabControllerReducer[routeName]?.header)
    const state = useSelector(state => state.tabControllerReducer[routeName]?.state)
    // const handledRouteIndex = routersIndexes[routeName]?.index;



    const backHandler = () => {
        if (index?.length > 1) {
            dispatch(tabViewBackController({ screen: routeName, header: null, state: state }))
            return
        }
        routeName == 'NotficationScreen' || 'Chat' ? navigation.goBack() : navigation.pop()

    }

    return (
        <View style={styles.container}>
            <Pressable onPress={backHandler} hitSlop={15}>
                <BackIcon color="#000" />
            </Pressable>
            <Text style={styles.text}>{header?.length > 0 ? header[header.length - 1] : t(`secsNames:${routeName}`)}</Text>
            <View style={{ width: 24 }} />
        </View>
    )
}
