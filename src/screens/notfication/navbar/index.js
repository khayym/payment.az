import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../navs';
import { styles } from './styles';

const Navbar = () => {
    const [index, setIndex] = useState(1);

    return (
        <View style={styles.container}>
            {
                CATEGORIES.map(i => <TouchableOpacity style={[styles.box, index == i.index && { backgroundColor: '#000' }]} key={i.index} onPress={() => setIndex(i.index)}>
                    <Text style={index == i.index ? styles.text : styles.notActiveText}>{i.name}</Text>
                </TouchableOpacity>)
            }
        </View>
    )
}

export default Navbar

