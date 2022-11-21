import { useNavigation } from '@react-navigation/native'
import { Linking, View } from 'react-native'
import { Bubble } from './bubble'
import { styles } from './styles';


let link = "https://payment.az/";
const redirectToLandingPage = () => {
    Linking.canOpenURL(link).then((supported) => {
        if (supported) {
            Linking.openURL(link);
        } else {
            console.log("Don't know how to open URI: " + link);
        }
    });
};

const Support = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Bubble press={() => navigation.navigate('Chat')} name='chat' title='Chat' label='Chatbot and communication with operator' />
            <Bubble press={() => console.log('---')} name='call' title='Call center' label='Contact by phone' />
            <Bubble press={() => redirectToLandingPage()} name='network' title='Social Networks' label='Payment.az official pages' />
        </View>
    )
}

export default Support

