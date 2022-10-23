import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const KeyboardAvoidWrapper = ({ children, keyboardStyle, viewStyle }) => {
    const bottomOffset = useSafeAreaInsets().top + 40;

    return (
        <KeyboardAvoidingView style={keyboardStyle} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? bottomOffset : -200}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
                <View style={viewStyle}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default KeyboardAvoidWrapper