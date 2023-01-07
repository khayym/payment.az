import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';

const Pad = ({ index, onPress, disabled }) => {
    return (
        <TouchableOpacity onPress={() => onPress(index)} style={styles.container} disabled={disabled} activeOpacity={0.5}>
            <Text style={styles.text}>{index}</Text>
        </TouchableOpacity>
    )
}

export default Pad
