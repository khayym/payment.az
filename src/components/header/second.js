import { View, Text, Pressable } from 'react-native'
import { styles as secondStyles } from './styles';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../../assets/icons/drawer/back.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setMontionDeterminer } from '../../reducers/headerDeterminerReducer';
import { useCallback } from 'react';

const styles = secondStyles.second;

export const SecondHead = ({ routeName }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const index = useSelector(state => state.headerMontionIndexes[routeName]?.index)
    const customName = useSelector(state => state.headerMontionIndexes[routeName]?.state)
    // const handledRouteIndex = routersIndexes[routeName]?.index;

    const backHandler = useCallback(() => {
        if (index > 0) dispatch(setMontionDeterminer({ screen: routeName, value: index - 1, state: index == 2 ? customName : null }))
        else {
            routeName == 'NotficationScreen' ? navigation.goBack() : navigation.pop()
        }
    }, [])

    return (
        <View style={styles.container}>
            <Pressable onPress={backHandler} hitSlop={15}>
                <BackIcon color="#000" />
            </Pressable>
            <Text style={styles.text}>{customName ? customName : t(`secsNames:${routeName}`)}</Text>
            <View style={{ width: 24 }} />
        </View>
    )
}
