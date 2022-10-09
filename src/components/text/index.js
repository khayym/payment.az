import { View, Text } from 'react-native'
import { memo } from 'react'
import { styles } from './styles';

const Texts = ({ child, children, childCustom, custom }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.main, custom]}>{children}</Text>
            {child && <Text style={[styles.child, childCustom]}>{child}</Text>}
        </View>
    )
}
export default memo(Texts);

