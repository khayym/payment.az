import { StyleSheet } from "react-native";
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
    controller: {
        container: {
            flex: 1,
            paddingHorizontal: 18,
        }
    },

    // ----------

    main: {
        container: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
    },

    //-----------


    second: {
        container: {
            flex: 1,

            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        text: {
            fontSize: 16,
            fontFamily: theme.font[500]
        }
    },

    // ----------


    header: {
        container: {
            height: 56,
            backgroundColor: '#fff',
            borderBottomColor: '#F1F1F1',
            borderBottomWidth: 1,
        }
    }
})