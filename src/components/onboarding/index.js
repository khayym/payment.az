import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, FlatList, Animated } from 'react-native'
import { sliders } from '../../constants/constants'
import Button from '../button'
import { SmallButton } from '../button/small'
import { Indicator } from './indicator'
import { OnBoardingItem } from './item'
import { onBoardingStyles as styles } from './styles';


export const OnBoarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const slidersRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0)
    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
    const { t } = useTranslation();
    const { navigate } = useNavigation()
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setActiveIndex(viewableItems[0].key);
    }).current

    const nextButtonHandler = () => {
        if (activeIndex == 1) slidersRef.current.scrollToIndex({ index: 1 })
        else navigate('SignInUp')
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                {activeIndex < 2 && <SmallButton text={t('welcome:skip')} callBack={() => navigate('SignInUp')} variant='secondary' />}
            </View>
            <View style={styles.flatView}>
                <FlatList
                    data={sliders}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={32}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    ref={slidersRef}
                />
                <Indicator currentIndex={activeIndex} />
            </View>
            <View style={styles.buttonWrapper}>
                <Button text={activeIndex == 1 ? t('welcome:next') : t('welcome:getStart')} callBack={nextButtonHandler} />
            </View>
        </View >
    )
}

