import { useState } from 'react';
import { View } from 'react-native'
import { Input } from '../../../components/text-input/';
import { styles } from './styles';
import Button from '../../../components/button';
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view';
import { setNewHomeInstance } from '../../../utils/instances';
import { useDispatch } from 'react-redux';
import { controlTabView } from '../../../reducers/tabControllerReducer';

const AddHome = () => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const callback = (header, i, state) => dispatch(controlTabView({ screen: 'AddApartment', index: i, header, state }));

    const createHome = () => {
        setNewHomeInstance(name);
    }

    return (
        <KeyboardAvoidWrapper viewStyle={{ flex: 1 }} keyboardStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <Input
                    placeholder='Menim menzilim'
                    label='Başlıq'
                    pressable={false}
                    value={name}
                    setValue={setName}
                    onBlur={() => console.log('---')}
                />
                <Button text={'Əlavə et'} callBack={() => callback("Komunal ödənişlər", 3, name)} />
            </View>
        </KeyboardAvoidWrapper>
    )
}

export default AddHome

