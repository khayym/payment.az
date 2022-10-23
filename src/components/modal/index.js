import { Modal, View } from 'react-native'
import { memo, Suspense } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { lazy } from 'react';
import { styles } from './styles';

const Succses = lazy(() => import('./succses'))
const Fail = lazy(() => import('./fail'))

const CutomModal = () => {
    const { visiblitiy, status } = useSelector(state => state.modalController)
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visiblitiy}
        >
            <Suspense>
                <View style={[styles.container, { marginTop: useSafeAreaInsets().top, marginBottom: useSafeAreaInsets().bottom }]}>
                    {
                        status ? <Succses /> : <Fail />
                    }
                </View>
            </Suspense>
        </Modal>
    )
}

export default memo(CutomModal)

