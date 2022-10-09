import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#038BFF',
        flex: 1,
        justifyContent: 'space-between'
    },
    overlay: {
        height: '90%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        paddingHorizontal: 32,
        paddingTop: 56,
    },
    head: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    iconContainer: {
        width: 40,
        padding: 5,
    },
})