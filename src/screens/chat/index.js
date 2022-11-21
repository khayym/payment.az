import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MessageBubble from '../../components/message-bobble'
import { theme } from '../../theme/theme'
import SendIcon from '../../../assets/icons/input/send.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect, useRef, useState } from 'react';
import { Chat_Bot_Answer, Chat_Bot_Reply } from '../../utils/chat-bot';

const botQuestions = [
    {
        user: 'bot',
        side: 'left',
        message: 'Salam, zəhmət olmasa dil seçimini edin.',
        type: 'text',
        index: 'greeting_user',
    },
    {
        user: 'bot',
        side: 'left',
        type: 'confirm',
        variant: 'default',
        index: 'choice_lang',
        listModel: 'white',
        lists: ['Azərbaycanca', 'Русский', 'English']
    }
]

const Chat = () => {

    const ref = useRef(null);
    const inputRef = useRef(null);
    const [text, setText] = useState("");
    const [chat, setChat] = useState(botQuestions);
    const [currentIndex, setCurrentIndex] = useState("choice_lang");

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardWillShow", () => {
            ref.current.scrollToEnd({ animated: true })
        });

        return () => showSubscription.remove();
    })

    // useEffect(() => {
    //     console.log('chat bot render');
    // }, [chat])

    const onPressHandler = (returned) => console.log({ returned });

    const sendButtonHandler = () => {
        Keyboard.dismiss();
        ref.current.scrollToEnd({ animated: true })
        setChat((state) => [...state, {
            user: 'user',
            side: 'right',
            message: text,
            type: 'text',
            index: Math.random(),
            variant: 'white'
        }])
        Chat_Bot_Answer(text, currentIndex)
            .then((answer) => setChat((state) => [...state, ...answer]))
        setText("")
    }

    return (
        <KeyboardAvoidingView style={styles.view} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={100}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.inner, { paddingBottom: useSafeAreaInsets().bottom }]}>
                    <ScrollView style={styles.scroll} ref={ref}>

                        {chat.map((item) => {
                            if (item.type === 'text') return <MessageBubble key={item.index} type={item.type} side={item.side} variant={item.variant}>{item.message}</MessageBubble>
                            if (item.type === 'confirm') return <MessageBubble
                                key={item.index}
                                type='confirm'
                                side={item.side}
                                variant={item.variant}
                                settings={{
                                    listModel: item.listModel,
                                    lists: item.lists,
                                    onPressHandler: onPressHandler
                                }}

                            />

                        })}

                    </ScrollView>

                    <View style={styles.inputView}>
                        <TextInput
                            ref={inputRef}
                            placeholder="Müraciətinizi bura daxil edin"
                            placeholderTextColor="#AEAEAE"
                            style={styles.input}
                            onChangeText={setText}
                            value={text}

                        />
                        <Pressable
                            disabled={text?.length < 1}
                            hitSlop={15}
                            onPress={sendButtonHandler}>
                            <SendIcon />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Chat

const styles = StyleSheet.create({
    inner: {


        // marginBottom: 80,
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    scroll: {
        flex: 1,
        paddingHorizontal: 22,
        paddingTop: 22,
        // borderWidth: 1,
        // height: 400
    },
    view: {
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    input: {
        height: '100%',
        flex: 1,
        // paddingHorizontal: 20,
        marginRight: 10,
        fontFamily: theme.font[400],
        fontSize: 14,
        backgroundColor: '#FBFBFB'
    },
    inputView: {
        paddingHorizontal: 22,
        backgroundColor: '#FBFBFB',
        height: 56,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: 'red',
        justifyContent: 'space-between',

        // flex: 1,
    },
})









{/* <MessageBubble 
                            type='confirm'
                            side='right'
                            // icon={<Image source={require('../../../assets/images/payments/nar.png')} style={{ width: 20, height: 20, marginRight: 10, }} />}
                            variant='default'
                            settings={{
                                listModel: 'white',
                                lists: [
                                    'BNW',
                                    'Mercedes',
                                    'Xeyyam'
                                ]
                            }}
                        >
                            azerbaycan
                        </MessageBubble> */}
