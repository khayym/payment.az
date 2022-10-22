import { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import { useDispatch, useSelector } from 'react-redux';
import { setMontionDeterminer } from '../../reducers/headerDeterminerReducer';
import ChoiseMobileOperator from './choise-operators';
import ConfirmMobileOperaion from './confirm-operation';
import SetMpbileOperators from './set-numbers';
import { styles } from './styles';

const renderScene = SceneMap({
    choise_operator_step: ChoiseMobileOperator,
    set_number_step: SetMpbileOperators,
    confirm_mobile_operation: ConfirmMobileOperaion
});


const MobileOperators = () => {
    // const [mobileOperatonIndex, setMobileOperatonIndex] = useState(0);
    const dispatch = useDispatch();
    const { index } = useSelector(state => state.headerMontionIndexes.MobileOperators)
    const setMobileOperatonIndex = (i) => dispatch(setMontionDeterminer({ screen: 'MobileOperators', value: i }));

    const [routes] = useState([
        { key: 'choise_operator_step', title: 'step' },
        { key: 'set_number_step', title: 'sddfsd' },
        { key: 'confirm_mobile_operation', title: 'sdfsdfd' },
    ]);

    return (
        // <View style={styles.container}>
        <TabView
            navigationState={{ index: index, routes }}
            renderScene={renderScene}
            sceneContainerStyle={styles.tabView}
            onIndexChange={setMobileOperatonIndex}
            renderTabBar={() => null}
            swipeEnabled={false}
            lazy
        />
        // </View>
    )
}

export default MobileOperators

