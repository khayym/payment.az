import { StyleSheet } from "react-native";

export const setNumbersStyles = StyleSheet.create({
    keyboard: { flex: 1 },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff', paddingHorizontal: 24,
        paddingVertical: 14,
    },
    buttonView: {
        height: 48
    }
})

export const styles = StyleSheet.create({
    tabView: {
        backgroundColor: '#f8f9fc',
        flex: 1,

    },
    container: {
        flex: 1,
    }
})


export const choiseStyle = StyleSheet.create({
    box: {
        flex: 1, backgroundColor: '#fff', paddingHorizontal: 24,
        paddingVertical: 14,
    }
})

export const confirmStyles = StyleSheet.create({
    box: {
        flex: 0.13,
        paddingHorizontal: 24,
        paddingVertical: 14,
    }
})