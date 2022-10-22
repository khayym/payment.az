import { View, Text, Pressable } from 'react-native'
import Icon from '../../../../assets/icons/modal/succses.svg';
import Button from '../../button';
import Options from '../option';
import { useDispatch, useSelector } from 'react-redux';
import ShareIcon from '../../../../assets/icons/modal/share.svg';
import { modalVisiblityController } from '../../../reducers/modalControllerReducer';
import { styles } from '../fail/styles';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import { useRef } from 'react';
import { captureRef } from "react-native-view-shot";
import { useNavigation } from '@react-navigation/native';
import { setMontionDeterminer } from '../../../reducers/headerDeterminerReducer';
import { t } from 'i18next';
var RNFS = require('react-native-fs');

const Succses = () => {
    const ref = useRef();
    const { goBack } = useNavigation();
    const dispatch = useDispatch();
    const { screen } = useSelector(state => state.modalController)

    const okHanler = () => {
        dispatch(modalVisiblityController())
        goBack()
        dispatch(setMontionDeterminer({ screen, value: 0 }))
    }

    const shareHanle = () => {
        captureRef(ref, {
            format: "jpg",
            quality: 0.5,
        }).then(uri => {
            RNFS.readFile(uri, 'base64').then((res) => {
                let urlString = 'data:image/jpeg;base64,' + res;
                let options = {
                    title: 'Odenis',
                    message: 'Odenis ugula heyata kecirildi',
                    url: urlString,
                    type: 'image/jpeg',
                }
                try {
                    Share.open(options).then().finally(() => okHanler()).catch((err) => err && console.log(err));
                }
                catch (err) {
                    throw err
                }
            })
        });
    }
    return (
        <View style={styles.continer}>
            <Pressable style={styles.icon} hitSlop={20} onPress={shareHanle}>
                <ShareIcon />
            </Pressable>
            <ViewShot style={styles.view} ref={ref} options={{ format: 'jpg', quality: 0.9 }}>
                <Icon />
                <Text style={styles.text}>{t('home:congratulations')}</Text>
                <Text style={styles.subText}>{t('home:succesPay')}</Text>
                <Options />
            </ViewShot>
            <View style={{ height: 48, paddingHorizontal: 32 }}>
                <Button text={t('home:end')} callBack={okHanler} />
            </View>
        </View>
    )

}

export default Succses
