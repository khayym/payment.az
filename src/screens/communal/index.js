import { useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import { useDispatch, useSelector } from 'react-redux';
import { controlTabView } from '../../reducers/tabControllerReducer';
import AddHome from './add-home';
import Choice from './choise';
import MyHome from './my-home';
import ScanTicked from './scan';
import { styles } from './styles';

const renderScene = SceneMap({
    choice_step: Choice,
    my_home: MyHome,
    add_home: AddHome,
    scan_ticked: ScanTicked
});


const CommunalPayments = () => {
    let { index } = useSelector(state => state.tabControllerReducer.ConsumerPayments)
    // const setConsumerIndex = (i) => dispatch(setMonitionDeterminer({ screen: 'ConsumerPayments', value: i }));

    const [routes] = useState([
        { key: 'choice_step', title: 'Choice' },
        { key: 'my_home', title: 'MyHome' },
        { key: 'add_home', title: 'AddHome' },
        { key: 'scan_ticked', title: 'ScanTicked' },
    ]);


    return (
        <TabView
            navigationState={{ index: index[index.length - 1], routes }}
            renderScene={renderScene}
            sceneContainerStyle={styles.tabView}
            // onIndexChange={setConsumerIndex}
            renderTabBar={() => null}
            swipeEnabled={false}
            lazy
        />
    )
}

export default CommunalPayments

