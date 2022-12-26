import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller } from './controller';
import { styles as indexStyle } from './styles';
const styles = indexStyle.header;

const CustomHeader = ({ name }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { marginTop: insets.top }]} >
            <Controller route={name} />
        </View>
    )
}

export default CustomHeader

