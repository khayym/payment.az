import { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import Pad from '../../components/num-pad';
import Backspace from '../../../assets/icons/backspace.svg';
import { setLogin, verifyPin } from '../../reducers/userReducer';
import { registerPasscodeMMKV, registerUserDataMMKV } from '../../utils/mmkv';
import { styles } from './styles';


const colum_1 = [1, 4, 7]
const colum_2 = [2, 5, 8, 0]
const colum_3 = [3, 6, 9];
const dot = [0, 1, 2, 3];

const SetPasscodeScreen = ({ route: { params } }) => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onPressNum = (num) => {
        setValue((state) => {
            if (state.length != 4) {
                return state += num
            }
            return state;
        });
    }

    const finishLogin = async () => {
        // from login params contain user data and navigate to set pin and directly to tab screen.
        if (params) {
            await registerUserDataMMKV(params);
            registerPasscodeMMKV(value);
            dispatch(setLogin(true));
            dispatch(verifyPin(true))
            return;
        }
    }

    useEffect(() => {
        if (value.length === 4) {
            finishLogin()
            return;
        }
    }, [value])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <View style={styles.head}>
                    <Text style={styles.headText}>Create a PIN-code for quick {'\n'}access Payment.az</Text>
                    <View style={styles.dotRoot}>
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
                {/* <TouchableOpacity style={styles.footer} activeOpacity={0.8} disabled>
                    <Text style={styles.footerText}> Forgot your PIN-code?</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

export default SetPasscodeScreen
