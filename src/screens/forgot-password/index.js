import { memo, useState } from 'react'
import EnterNumber from './enter-number';
import VerifyForgotPasswordOtp from './otp';
import SetNewPassword from './set-new-password';
import { useSelector } from 'react-redux';
import { SceneMap, TabView } from 'react-native-tab-view';


const renderScene = SceneMap({
    enter_number_step: EnterNumber,
    verify_otp_step: VerifyForgotPasswordOtp,
    set_new_password_step: SetNewPassword
});


const ForgotPassword = () => {
    let state = useSelector(state => state.tabControllerReducer.ForgotPassword);
    let index = state.index

    const [routes] = useState([
        { key: 'enter_number_step', title: 'EnterNumber' },
        { key: 'verify_otp_step', title: 'VerifyForgotPasswordOtp' },
        { key: 'set_new_password_step', title: 'SetNewPassword' },
    ]);

    return (
        <TabView
            navigationState={{ index: index[index.length - 1], routes }}
            renderScene={renderScene}
            renderTabBar={() => null}
            onIndexChange={() => null}
            swipeEnabled={false}
            lazy
        />
    )
}

export default memo(ForgotPassword)
