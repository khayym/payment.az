import { View, Text, Pressable } from 'react-native'
import { styles as secondStyles } from './styles';
import { t } from 'i18next';
import { useNavigation } from '@react-navigation/native';
const styles = secondStyles.second;

export const SecondHead = ({ routeName }) => {
    const navigation = useNavigation();
    console.log(routeName)
    return (
        <View>
            <Text>{t(`secsNames:${routeName}`)}</Text>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>go back</Text>
            </Pressable>
        </View>
    )
}
