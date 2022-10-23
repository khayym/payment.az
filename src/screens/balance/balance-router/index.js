import { SceneMap, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux'
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer'
import { styles } from '../styles'
import { BalanceAdd } from '../balance-add';
import { useState } from 'react';

const renderScene = SceneMap({
    balance_add: BalanceAdd,
    // confirm_mobile_operation: ConfirmMobileOperaion
});



const BalanceRouter = (pp) => {
    const dispatch = useDispatch();
    const { index } = useSelector(state => state.headerMontionIndexes.BalanceRouter)
    const setMobileOperatonIndex = (i) => dispatch(setMontionDeterminer({ screen: 'BalanceRouter', value: i }));

    const [routes] = useState([
        { key: 'balance_add', title: 'balance_add' },
        // { key: 'confirm_mobile_operation', title: 'sdfsdfd' },
    ]);
    return (
        <TabView
            navigationState={{ index: index, routes }}
            renderScene={renderScene}
            sceneContainerStyle={styles.tabView}
            onIndexChange={setMobileOperatonIndex}
            renderTabBar={() => null}
            // swipeEnabled={false}
            swipeEnabled
            lazy
        />
    )
}

export default BalanceRouter