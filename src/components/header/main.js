import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { View, Pressable, Image } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
import RingIcon from '../../../assets/icons/drawer/ringIcon';
import Burger from '../../../assets/icons/drawer/toggle.svg';
import CancelIcon from '../../../assets/icons/drawer/x.svg';
import { styles as mainStyles } from './styles';
const styles = mainStyles.main;



export const MainHead = () => {
    const rotation = useSharedValue(0);
    const [toggled, setToggled] = useState(false);
    const navigation = useNavigation();
    const { drawer } = useSelector(state => state.drawerController);

    useEffect(() => {
        rotation.value = !drawer ? 0 : 90
    }, [drawer])

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateZ: withSpring(`${rotation.value}deg`, {
                    duration: 500,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                })
            }]
        };
    });

    const toggleOpen = useCallback((order) => {
        navigation.dispatch(DrawerActions.toggleDrawer())
        setToggled(!order)
        rotation.value = order ? 0 : 90
    }, [])


    return (
        <View style={[styles.container]} >
            <AnimatedPressable style={[styles.burger, animatedStyles]} onPress={() => toggleOpen(toggled)}>
                {drawer ? <CancelIcon /> : <Burger />}
            </AnimatedPressable>
            <Image source={require('../../../assets/images/paymentaz-logo.png')} />
            <Pressable onPress={() => navigation.navigate('NotficationScreen')}>
                <RingIcon active={toggled} />
            </Pressable>
        </View>
    )
}
