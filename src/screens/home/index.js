import { View, Text, Pressable, Dimensions } from 'react-native'


const Home = ({ navigaion }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>home</Text>
            <View style={{ borderWidth: 1, position: 'absolute', width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'red', zIndex: 999 }}></View>
        </View >
    )
}

export default Home