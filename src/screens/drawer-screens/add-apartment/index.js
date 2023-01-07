import { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { useSelector } from "react-redux";
import AddInfo from "./add";
import ChoiceOption from "./choice-option";
import Initial from './initial';
import Confirm from './confirm';
import { styles } from './styles';


const renderScene = SceneMap({
    initial: Initial,
    add: AddInfo,
    choice: ChoiceOption,
    confirm: Confirm
});


const AddApartmentScreen = () => {
    let { index } = useSelector(state => state.tabControllerReducer.AddApartment)

    const [routes] = useState([
        { key: 'initial', title: 'Initial' },
        { key: 'add', title: 'Add' },
        { key: 'choice', title: 'ChoiceOption' },
        { key: 'confirm', title: 'Confirm' },
    ]);


    return (
        <TabView
            navigationState={{ index: index[index.length - 1], routes }}
            renderScene={renderScene}
            sceneContainerStyle={styles.tabView}
            renderTabBar={() => null}
            onIndexChange={() => null}
            swipeEnabled={false}
            lazy
        />
    )
}

export default AddApartmentScreen
