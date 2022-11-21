import { MotiView } from 'moti'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../theme/theme';
import { textStyle, variantFinder } from './settings';
import { styles } from './styles';


const MessageBubble = ({ children, type = 'text', side = 'left', variant = 'default', icon, settings }) => {

    return (
        <MotiView
            style={[styles.moti, side === 'right' ? { alignItems: 'flex-end' } : 'left']}
            delay={150}
            from={{ translateX: side === 'left' ? -15 : 15 }}
            animate={{ translateX: 0 }}
        >
            <View style={variantFinder(variant)}>
                {type === 'text' ?
                    <View style={styles.textView}>
                        {icon}
                        <Text style={textStyle(variant)}>{children}</Text>
                    </View>
                    : null
                }
                {type === 'component' ?
                    <View>
                        {children}
                        {icon}
                    </View>
                    : null
                }

                {
                    type === 'confirm' ?
                        <View style={variantFinder(variant)}>
                            {
                                settings?.lists.map((item, index) => (
                                    <TouchableOpacity key={index} style={variantFinder(settings.listModel, { marginVertical: 2.5 })} onPress={() => settings?.onPressHandler && settings?.onPressHandler(index)}>
                                        <Text style={textStyle(settings.listModel)}>{item}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        : null
                }

            </View>
        </MotiView>
    )
}

export default MessageBubble

