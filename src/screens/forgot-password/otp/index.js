import { View, Text, Button, Touchable, TouchableOpacity } from 'react-native'
import { controlTabView } from '../../../reducers/tabControllerReducer'

const VerifyForgotPasswordOtp = ({ route: { dispatch } }) => {
    return (
        <View>
            <Text>VerifyForgotPasswordOtp</Text>
            {/* <Touchable onPress={() => console.log('---')}  /> */}
            <TouchableOpacity onPress={() => dispatch(controlTabView({ screen: 'ForgotPassword', index: 2 }))} style={{ width: 40, height: 40, borderWidth: 1 }} />
        </View>
    )
}

export default VerifyForgotPasswordOtp