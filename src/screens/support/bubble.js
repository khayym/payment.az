import { View, Text, Image, Pressable } from 'react-native'
import { bubbleStyle as styles } from './styles'

const images = {
    chat: require('../../../assets/icons/drawer/bubbleChat.png'),
    call: require('../../../assets/icons/drawer/callCenter.png'),
    network: require('../../../assets/icons/drawer/globalNetwork.png'),
}

export const Bubble = ({ press, title, name, label }) => {
    return (
        <Pressable style={styles.container} onPress={press}>
            <View style={styles.imageView}>
                <Image source={images[name]} />
            </View>
            <View style={styles.textBox} >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </Pressable>
    )
}

