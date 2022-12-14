import { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import LogIcon from '../../../assets/icons/out.svg';
import Backspace from '../../../assets/icons/backspace.svg';
import Pad from '../../components/num-pad';
import { cleanMMKV, verifyPasscode } from '../../utils/mmkv';
import { setLogin, verifyPin } from '../../reducers/userReducer';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../reducers/modalControllerReducer';
import { styles } from './styles';

const colum_1 = [1, 4, 7]
const colum_2 = [2, 5, 8, 0]
const colum_3 = [3, 6, 9];
const dot = [0, 1, 2, 3];


const PasscodeScreen = () => {
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

    const match = async (val) => {
        if (val.length === 4) {
            const isMatch = await verifyPasscode(value);
            dispatch(verifyPin(isMatch));
        }
    }

    const logOut = async () => {
        await cleanMMKV();
        dispatch(clearHistory())
        dispatch(setLogin(false));
        dispatch(verifyPin(false))
    }

    useEffect(() => {
        match(value);
    }, [value])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <TouchableOpacity style={styles.icon} onPress={logOut}>
                    <LogIcon color="#038BFF" />
                </TouchableOpacity>
                <View style={styles.head}>
                    <Image source={require('../../../assets/images/user.png')} />
                    <Text style={styles.headText}>Enter your PIN-code</Text>
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
                <TouchableOpacity style={styles.footer} activeOpacity={0.8} disabled>
                    <Text style={styles.footerText}> Forgot your PIN-code?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PasscodeScreen
