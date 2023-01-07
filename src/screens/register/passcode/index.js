import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import Pad from '../../../components/num-pad';
import { registerPasscodeMMKV } from '../../../utils/mmkv';
import Backspace from '../../../../assets/icons/backspace.svg'
import { styles } from './styles';
import { useEffect } from 'react';
import { tabSupervisor } from '../../../utils/tab-view-util';

const colum_1 = [1, 4, 7]
const colum_2 = [2, 5, 8, 0]
const colum_3 = [3, 6, 9];
const dot = [0, 1, 2, 3];

const Passcode = () => {
    const [value, setValue] = useState('');
    const navigation = useNavigation();

    const buttonHandler = async (val) => {
        await registerPasscodeMMKV(val);
        navigation.popToTop();
    }

    const onPressNum = (num) => {

        setValue((state) => {
            if (state.length != 4) {
                return state += num
            }
            return state;
        });
    }

    useEffect(() => {
        if (value.length === 4) {
            buttonHandler(value);
            tabSupervisor('control', { screen: 'Register', index: 0, state: { number: "" } })
        }

        return () => null;
    }, [value])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Create a PIN-code for quick {'\n'}access Payment.az</Text>
                <View style={styles.dotContainer}>
                    {dot.map(element => <View
                        key={element}
                        style={[styles.dot, value?.length > element && { backgroundColor: '#038BFF' }]}

                    />)}
                </View>
            </View>
            <View style={styles.body}>
                <View >
                    {colum_1.map(element => <Pad
                        key={element}
                        onPress={onPressNum}
                        disabled={value.length === 4}
                        index={element} />)
                    }
                </View>
                <View >
                    {colum_2.map(element => <Pad
                        key={element}
                        onPress={onPressNum}
                        disabled={value.length === 4}
                        index={element} />)
                    }
                </View>
                <View >
                    {colum_3.map(element => <Pad
                        key={element}
                        onPress={onPressNum}
                        disabled={value.length === 4}
                        index={element} />)
                    }
                    <TouchableOpacity
                        onPress={() => setValue(state => state.slice(0, -1))}
                        disabled={value === ""}
                        style={styles.back}
                    >
                        <Backspace />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Passcode

