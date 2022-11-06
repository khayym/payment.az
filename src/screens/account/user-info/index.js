import { ActivityIndicator, Image, Pressable, View } from 'react-native'
import { Input } from '../../../components/text-input'
import AddIcon from '../../../../assets/icons/profile/add.svg';
import { NumInput } from './number';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { getUserInstance, updateUserInfoInstance } from '../../../utils/instances';
import * as ImagePicker from 'expo-image-picker';
import { updateUserDataMMKV } from '../../../utils/mmvk';
import KeyboardAvoidWrapper from '../../../components/keyboard-awoid-view';
import { t } from 'i18next';

const UserInfo = () => {
    // const { userData } = useSelector(state => state.user);
    const [userData, setUserData] = useState(null);
    const [image, setImage] = useState(null);
    const [wait, setWait] = useState(true);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            await updateUserDataMMKV({ user_uri: result.uri })
        }
    };

    const handleIputChanges = async () => {
        const userObject = {
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone: userData.phone,
            email: userData.email
        }
        const resoponce = await updateUserInfoInstance(userObject);
        setUserData(resoponce);
    }


    useEffect(() => {
        setWait(true);
        getUserInstance().then(datas => {
            setUserData(datas)
            setImage(datas.user_uri);
            setWait(false)
        });
    }, [])

    return wait ? <ActivityIndicator size='large' style={{ flex: 1 }} /> : (
        <KeyboardAvoidWrapper viewStyle={styles.conatiner} keyboardStyle={{ flex: 1 }}>
            <View style={styles.imgContainer}>
                <View>
                    <Image source={require('../../../../assets/images/user.png')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                    {/* <Image source={image ? { uri: image } : require('../../../../assets/images/user.png')} style={{ width: 80, height: 80, borderRadius: 50 }} /> */}
                    <Pressable style={styles.icon} onPress={() => pickImage()}>
                        <AddIcon />
                    </Pressable>
                </View>
            </View>
            <Input
                value={userData?.first_name}
                setValue={(val) => setUserData({ ...userData, first_name: val })}
                onBlur={handleIputChanges}
                label={t('profile:name')}
                customStyle={{ marginBottom: 32 }}
                placeholder={t('profile:yourName')}
            />
            <Input
                value={userData?.last_name}
                onBlur={handleIputChanges}
                setValue={(val) => setUserData({ ...userData, last_name: val })}
                label={t('profile:surname')}
                customStyle={{ marginBottom: 32 }}
                placeholder={t('profile:yourSurname')}
            />
            <NumInput
                number={userData?.phone.slice(-9)}
                setNumber={(val) => setUserData({ ...userData, phone: val })}
                label={t('profile:number')}
                onBlur={handleIputChanges}
                customStyle={{ marginBottom: 32 }}
            />
            <Input
                onBlur={handleIputChanges}
                value={userData?.email}
                setValue={(val) => setUserData({ ...userData, email: val })}
                label={t('profile:email')}
                customStyle={{ marginBottom: 32 }}
                placeholder={'user@example.com'} />

        </KeyboardAvoidWrapper>
    )
}

export default UserInfo

