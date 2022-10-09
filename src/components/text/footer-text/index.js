import { View, Text, TouchableOpacity } from 'react-native'
import { memo } from 'react'
import { styles } from '../styles'

const FooterText = ({ text, blur, callback }) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{text} </Text>
            <TouchableOpacity onPress={callback}>
                <Text style={styles.blur}>{blur}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(FooterText)