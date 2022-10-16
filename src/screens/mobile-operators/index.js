import { memo, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import ChoiseMobileOperator from './choise-operators';
import ConfirmMobileOperaion from './confirm-operation';
import SetMpbileOperators from './set-numbers';

const renderScene = SceneMap({
    choise_operator_step: ChoiseMobileOperator,
    set_number_step: SetMpbileOperators,
    confirm_mobile_operation: ConfirmMobileOperaion
});


const MobileOperators = () => {
    const [mobileOperatonIndex, setMobileOperatonIndex] = useState(0);

    const [routes] = useState([
        { key: 'choise_operator_step', title: 'step' },
        { key: 'set_number_step', title: 'sddfsd' },
        { key: 'confirm_mobile_operation', title: 'sdfsdfd' },
    ]);

    return (
        <View style={{ flex: 1, }}>
            <TabView
                navigationState={{ index: mobileOperatonIndex, routes }}
                renderScene={renderScene}
                onIndexChange={setMobileOperatonIndex}
                renderTabBar={() => null}
                swipeEnabled={false}
                lazy
            />
        </View>
    )
}

export default MobileOperators

const styles = StyleSheet.create({})