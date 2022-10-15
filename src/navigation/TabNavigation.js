import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from './icons';
import { tabOptions } from "./styles";
import HomeExplorer from "../screens/home/HomeExplorer";
import PaymentExplorer from "../screens/payment/PaymentExplorer";
import QrScreen from "../screens/qr";
import AccountExplorer from "../screens/account/AccountExplorer";
import BalanceExplorer from "../screens/balance/BalanceExplorer";
import { useTranslation } from "react-i18next";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { setDrawerStatus } from "../reducers/drawerReducer";
import { useEffect } from "react";
const Tab = createBottomTabNavigator()

const TabNavigator = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const isDrawerOpen = useDrawerStatus() === 'open';
    useEffect(() => {
        dispatch(setDrawerStatus(isDrawerOpen))
    }, [isDrawerOpen])


    return (
        <Tab.Navigator screenOptions={tabOptions}>
            <Tab.Screen
                name="Home"
                component={HomeExplorer}
                options={{
                    tabBarIcon: ({ color }) => <Icons.HomeIcon style={{ color }} />,
                    title: t('tab:main'),
                }} />
            <Tab.Screen
                name="Payment"
                component={PaymentExplorer}
                options={{
                    tabBarIcon: ({ color }) => <Icons.PaymentIcon style={{ color }} />,
                    title: t('tab:payment'),
                }} />
            <Tab.Screen
                name="QrScreen"
                component={QrScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icons.QrIcon style={{ color }} />,
                    title: t('tab:qr'),
                }} />
            <Tab.Screen
                name="Balance"
                component={BalanceExplorer}
                options={{
                    tabBarIcon: ({ color }) => <Icons.BalanceIcon style={{ color }} />,
                    title: t('tab:balance'),
                }} />
            <Tab.Screen
                name="Account"
                component={AccountExplorer}
                options={{
                    tabBarIcon: ({ color }) => <Icons.AccountIcon style={{ color }} />,
                    title: t('tab:account'),
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigator