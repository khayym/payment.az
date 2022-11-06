import { useState } from 'react'
import { View, Text } from 'react-native'
import { PasswordInput } from '../../../components/password-input'
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view';
import Button from '../../../components/button';
import { styles } from './styles';
import { t } from 'i18next';


const UserSecurity = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const errorHanler = (message) => {
        setError(true);
        return setErrorMessage(message);
    }

    const handleButtonPress = async () => {
        if (!ready) errorHanler('not reeady')
        else if (oldPassword == "") errorHanler('old password')
        else if (oldPassword === newPassword) errorHanler('not same old new');
        else if (newPassword !== confirmPassword) errorHanler('Not same')
        else {
            setError(false);
            setErrorMessage(null);
            console.log({
                oldPassword,
                newPassword,
                confirmPassword,
                ready
            })
        }
    }

    // resetPassword: 'Şifrəni yenilə',
    // currnetPassword: 'Cari şifrə',
    // newPassword: 'Yeni şifrə',
    // cunfirmNewPassword: 'Yeni şifrənin təkrarı',
    // ok: 'Təsdiq et',

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('profile:resetPassword')}</Text>
            <KeyboardAvoidWrapper keyboardStyle={styles.avoid} viewStyle={{ flex: 1 }}>
                <PasswordInput
                    label={t('profile:currnetPassword')}
                    text={oldPassword}
                    setText={setOldPassword}
                    ready={ready}
                    setReady={setReady}
                />
                <PasswordInput
                    label={t('profile:newPassword')}
                    text={newPassword}
                    setText={setNewPassword}
                    ready={ready}
                    setReady={setReady}
                    custom={{ marginTop: 32 }}
                    withSecure={true}
                />
                <PasswordInput
                    label={t('profile:cunfirmNewPassword')}
                    text={confirmPassword}
                    setText={setConfirmPassword}
                    ready={ready}

                    setReady={setReady}
                    custom={{ marginTop: 32, marginBottom: 40, }}
                />
                <Button text={t('profile:ok')} callBack={handleButtonPress} />
            </KeyboardAvoidWrapper>

        </View>
    )
}

export default UserSecurity

