import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/button';
import KeyboardAvoidWrapper from '../../../../components/keyboard-awoid-view';
import { Input } from '../../../../components/text-input';
import { controlTabView, updateTabViewState } from '../../../../reducers/tabControllerReducer';
import { styles } from './styles';

const AddInfo = () => {

    const dispatch = useDispatch();
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'AddApartment', index: i, header, state }));
    const state = useSelector(state => state.tabControllerReducer['AddApartment'].state);

    const titleInput = (val) => dispatch(updateTabViewState({ screen: 'AddApartment', state: { address_title: val } }))
    const addressInput = (val) => dispatch(updateTabViewState({ screen: 'AddApartment', state: { full_address: val } }))


    const titleInputOnBlur = () => {
        if (state.address_title.length < 2) {
            dispatch(updateTabViewState({ screen: 'AddApartment', state: { titleError: true } }))
            return
        }
        dispatch(updateTabViewState({ screen: 'AddApartment', state: { titleError: false } }))
    }

    const addressInputOnBlur = () => {
        if (state.full_address.length < 2) {
            dispatch(updateTabViewState({ screen: 'AddApartment', state: { addressError: true } }))
            return
        }

        dispatch(updateTabViewState({ screen: 'AddApartment', state: { addressError: false } }))
    }



    return (
        <KeyboardAvoidWrapper viewStyle={{ flex: 1 }} keyboardStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.inputGroup}>
                    <Input
                        placeholder='Menim menzilim'
                        label='Başlıq'
                        pressable={false}
                        value={state?.address_title}
                        error={state?.titleError}
                        setValue={(val) => titleInput(val)}
                        onBlur={titleInputOnBlur}
                    />
                    <Input
                        customStyle={{ marginTop: 24 }}
                        placeholder='Z.Əliyeva küçəsi, 5'
                        label='Unvan'
                        pressable={false}
                        value={state?.full_address}
                        error={state?.addressError}
                        setValue={(val) => addressInput(val)}
                        onBlur={addressInputOnBlur}

                    />
                </View>
                <Button text={'Davam et'} callBack={() => callback("Komunal ödənişlər", 2, state)} disable={state?.full_address?.length < 2 || state?.address_title?.length < 2} />
            </View>
        </KeyboardAvoidWrapper>
    )
}

export default AddInfo

