import { SceneMap, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux'
import { setMonitionDeterminer } from '../../../reducers/headerDeterminerReducer'
import { styles } from '../styles'
import { BalanceAdd } from '../balance-add';
import { useState } from 'react';
import { CardInfo } from '../card-info';

const renderScene = SceneMap({
    balance_add: BalanceAdd,
    card_info: CardInfo
});



const BalanceRouter = (pp) => {
    const dispatch = useDispatch();
    const { index } = useSelector(state => state.headerMonitionIndexes.BalanceRouter)
    const setMobileOperatonIndex = (i) => dispatch(setMonitionDeterminer({ screen: 'BalanceRouter', value: i }));

    const [routes] = useState([
        { key: 'balance_add', title: 'balance_add' },
        { key: 'card_info', title: 'card_info' },
    ]);
    return (
        <TabView
            navigationState={{ index: index, routes }}
            renderScene={renderScene}
            sceneContainerStyle={styles.tabView}
            // onIndexChange={setMobileOperatonIndex}
            renderTabBar={() => null}
            // swipeEnabled={false}
            swipeEnabled
            lazy
        />
    )
}

export default BalanceRouter