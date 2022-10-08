import { View, Text, Image, useWindowDimensions } from 'react-native'
import { itemStyles as styles } from './styles';


export const OnBoardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.description} >{item.description}</Text>
        </View>
    )
}
