import { useState } from 'react';
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../components/button';
import DropDown from '../../../../components/drop-down'
import KeyboardAvoidWrapper from '../../../../components/keyboard-awoid-view';
import { Input } from '../../../../components/text-input';
import { controlTabView, updateTabViewState } from '../../../../reducers/tabControllerReducer';
import { styles } from '../add/styles'
import { setNewHomeInstance } from '../../../../utils/instances';

const Confirm = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [wait, setWait] = useState(false);
    const [items, setItems] = useState([
        { label: 'Əhali', value: 1 },
        { label: 'Qeyri Əhali', value: 2 }
    ]);

    const dispatch = useDispatch();
    const state = useSelector(state => state.tabControllerReducer['AddApartment'].state);
    const subscriberInput = (val) => dispatch(updateTabViewState({ screen: 'AddApartment', state: { subscriber_code: val } }))
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'AddApartment', index: i, header, state }));

    const result = () => {
        setWait(true);
        dispatch(updateTabViewState({ screen: 'AddApartment', state: { child_category_id: value } }));
        setNewHomeInstance().then(data => setWait(false))
            .finally(() => callback("Ünvanlarım", 0, null))
    }

    return (
        <KeyboardAvoidWrapper viewStyle={{ flex: 1 }} keyboardStyle={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View>
                    <DropDown
                        setValue={setValue}
                        value={value}
                        open={open}
                        setOpen={setOpen}
                        items={items}
                        setItems={setItems}
                        placeholder='Ödəniş növü seçin'
                        label={'Ödəniş növü'}
                    />

                    <Input
                        customStyle={{ marginTop: open ? 100 : 24 }}
                        placeholder='99412345678901'
                        label='Abonent kodu'
                        keyboardType='number-pad'
                        pressable={false}
                        onBlur={() => console.log('blur')}
                        value={state?.subscriber_code}
                        error={state?.subscriber_code.length < 2}
                        setValue={(val) => subscriberInput(val)}
                    />
                </View>

                <Button text={'Davam et'} callBack={result} disable={state?.subscriber_code.length < 2 || value == null || wait} wait={wait} />
            </View>
        </KeyboardAvoidWrapper>
    )
}

export default Confirm