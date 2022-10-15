import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    controller: {
        container: {
            // borderWidth: 1,
            flex: 1,
            // borderColor: 'blue',
        }
    },
    main: {
        container: {
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
    },
    second: {},
    header: {
        container: {
            height: 56,
            backgroundColor: '#fff',
            paddingHorizontal: 18,
            // borderWidth: 1,
        }
    }
})