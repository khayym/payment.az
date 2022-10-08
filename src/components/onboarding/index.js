import { useRef, useState } from 'react'
import { View, FlatList, Animated } from 'react-native'
import { sliders } from '../../constants/constants'
import Button from '../button'
import { SmallButton } from '../button/small'
import { Indicator } from './indicator'
import { OnBoardingItem } from './item'
import { onBoardingStyles as styles } from './styles';


export const OnBoarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const [activeIndex, setActiveIndex] = useState(0)
    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setActiveIndex(viewableItems[0].key);
    }).current

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <SmallButton text='Skip' callBack={() => console.log('sdsd')} variant='secondary' />
            </View>
            <View style={styles.flatView}>
                <FlatList
                    data={sliders}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                />
                <Indicator currentIndex={activeIndex} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button text={activeIndex == 1 ? 'Next' : 'Get Started'} callBack={() => console.log('sdsd')} />
            </View>
        </View >
    )
}

