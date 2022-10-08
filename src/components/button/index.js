import { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { primary, secondary } from './styles';

const Button = ({ text, callBack, variant = 'primary', disable }) => {
    const style = variant === 'primary' ? primary : secondary;
    const disabledStyle = primary.disabled;

    return (
        <TouchableOpacity onPress={callBack} style={[style.container, disable && disabledStyle]} disabled={disable} activeOpacity={0.6} >
            <Text style={[style.text, disable && { color: '#fff' }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button)

