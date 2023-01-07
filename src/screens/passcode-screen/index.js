import { useState, useEffect } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LogIcon from '../../../assets/icons/out.svg';
import Backspace from '../../../assets/icons/backspace.svg';
import Pad from '../../components/num-pad';
import { theme } from '../../theme/theme';
import { } from 'react';
import { verifyPasscode } from '../../utils/mmkv';
import { verifyPin } from '../../reducers/userReducer';
import { useDispatch } from 'react-redux';

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

    useEffect(() => {
        match(value);
    }, [value])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <View style={styles.icon}>
                    <LogIcon color="#038BFF" />
                </View>
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

export const styles = StyleSheet.create({
    back: {
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        margin: Dimensions.get('window').width * 0.022,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    headText: {
        color: theme.colors.basic800,
        fontSize: 16,
        fontFamily: theme.font[500],
        marginVertical: 12,
    },
    dotRoot: {
        borderColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        marginHorizontal: 5,
        borderRadius: 50,
        width: 10,
        height: 10,
        borderColor: '#038BFF',
        borderWidth: 1,
    },
    footer: {
        borderColor: 'purple',
        justifyContent: 'flex-end',
    },
    footerText: {
        color: '#038BFF',
        fontSize: 14,
        fontFamily: theme.font[500],
        marginVertical: 12,
        textAlign: 'center'
    },
    body: {
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '10%',
    },
    head: {
        borderColor: 'red',
        alignItems: 'center',
        marginTop: '8%',
    },
    icon: {
        borderColor: 'blue',
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    root: {

        flex: 1,
        padding: 10,
        justifyContent: 'space-between'
    }
})