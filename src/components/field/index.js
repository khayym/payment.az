import { memo } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const Field = ({ left, right, text, label, callback, mv, type = 'icon' }) => {
    return (
        <TouchableOpacity style={[styles.container, { marginVertical: mv, }]} onPress={callback} activeOpacity={0.6}>
            <View style={styles.left}>
                <View style={styles.leftImgContainer}>
                    {
                        type === 'image' ? <Image source={left} style={styles.image} /> : left
                    }
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                    {label && <Text style={styles.label} numberOfLines={1}>{label}</Text>}
                </View>
            </View>

            {right && <View style={styles.right}>
                {right}
            </View>}
        </TouchableOpacity>
    )
}

export default memo(Field)
