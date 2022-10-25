import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    view: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    bottomInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    space: {
        width: 17,
        backgroundColor: 'transparent'
    }
})