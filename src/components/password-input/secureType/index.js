import { Text, View } from 'react-native'
import { memo, useCallback, useEffect, useState } from 'react'
import { passwordRequires } from '../../../constants/constants'
import { secureStyles as styles } from '../styles'
import { useTranslation } from 'react-i18next'

const minimum = 8
const atLeastUpperCase = /(?=.*?[A-Z])/
const atLeastOneDigit = /(?=.*?[0-9])/
const onlyEnglish = /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/


const SecureType = ({ text, setReady, withSecure }) => {
    const { t } = useTranslation()
    const [corrector, setCorrector] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    })
    const [errorCount, setErrorCount] = useState(0);

    const securityWeknes = () => {
        if (errorCount <= 1) return t('singIn:secureWeeknes1')
        else if (errorCount > 1 && errorCount < 3) return t('singIn:secureWeeknes2')
        else return t('singIn:secureWeeknes3')
    }

    const countTrue4obj = useCallback((corrector, text) => {
        var count = 0;
        for (var p in corrector) {
            if (corrector.hasOwnProperty(p) && corrector[p] === true) {
                count++
            }
        }
        setErrorCount(count)
        count === 4 ? setReady(true) : setReady(false);
    }, [])

    const textHandler = useCallback((text) => {
        const forCount = {
            1: text.length >= minimum,
            2: onlyEnglish.test(text),
            3: atLeastUpperCase.test(text),
            4: atLeastOneDigit.test(text)
        }
        setCorrector({
            1: text.length >= minimum,
            2: onlyEnglish.test(text),
            3: atLeastUpperCase.test(text),
            4: atLeastOneDigit.test(text)
        })
        countTrue4obj(forCount, text)
    }, [])

    useEffect(() => {
        textHandler(text)
    }, [text])


    if (withSecure) return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={styles.progress}>
                    <View style={[styles.progresItem, errorCount > 0 && { backgroundColor: '#ffaa00bb' }]} />
                    <View style={[styles.progresItem, errorCount > 1 && { backgroundColor: '#FFAA00' }]} />
                    <View style={[styles.progresItem, errorCount > 2 && { backgroundColor: '#00D68F' }]} />
                    <View style={[styles.progresItem, errorCount > 3 && { backgroundColor: '#00ffaa' }]} />
                </View>

                <Text style={styles.wick}>{securityWeknes()}</Text>
            </View>
            <View>
                {
                    passwordRequires.map((item) => <View key={item._id} style={styles.textBox}>
                        <View style={[styles.dot, corrector[item._id] === true && { backgroundColor: '#038BFF' }]} />
                        <Text style={[styles.text, corrector[item._id] === true && { color: '#038BFF' }]}>{t(item.title)}</Text>
                    </View>)
                }
            </View>
        </View>
    )


}

export default memo(SecureType)

