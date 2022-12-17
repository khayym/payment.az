import { Text, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
const DropDown = ({ value, setValue, items, setItems, label, placeholder, open, setOpen }) => {


    return (
        <View>
            <Text style={[styles.text, { marginBottom: 8 }]}>{label}</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                placeholder={placeholder}
                placeholderStyle={styles.placeholder}
                setValue={setValue}
                setItems={setItems}
                style={styles.container}
                dropDownContainerStyle={{
                    backgroundColor: '#F7F9FC',
                    borderColor: '#E4E9F2',
                }}
                textStyle={styles.text}
            />
        </View>
    )
}

export default DropDown

