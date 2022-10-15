import { Platform, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export const styles = StyleSheet.create({
    tabbar: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        ...Platform.select({
            ios: {
                shadowColor: "rgba(196, 196, 196, 0.15)",
                shadowRadius: 16,
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.15,
            },
            android: {
                elevation: 4,
            },
        })
    }
})

export const tabOptions = {
    tabBarActiveTintColor: theme.colors.black,
    tabBarInactiveTintColor: theme.colors.basic600,
    tabBarStyle: styles.tabbar,
    tabBarHideOnKeyboard: true,
    headerShown: false
}