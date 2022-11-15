import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import Field from '../../components/field';
import { dateFixer } from '../../helpers/date';
import { groupSorter } from '../../helpers/group_sorter';
import { imageUriFinder } from '../../helpers/imageFinder';
import { styles } from './styles';
import { TimeTable } from './timeTable';

const PaymentScreen = () => {

    const { history } = useSelector(state => state.modalController);
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        const groupArrays = groupSorter(history)
        setSorted(groupArrays);
    }, [history])


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Son ödənişlər</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.view}
            >
                {
                    sorted.map((group, index) => {
                        return <View key={index}>
                            <Text style={styles.time}>{dateFixer(group.date)}</Text>
                            {
                                group.lists.map((item, i) => {
                                    return <Field
                                        key={i}
                                        type='image'
                                        text={item.organization}
                                        label={item.group}
                                        left={imageUriFinder(item.image)}
                                        right={<TimeTable time={item.time} amount={item.amount} />}
                                        mv={10}
                                    />
                                })
                            }
                        </View>
                    })
                }
                {sorted?.length === 0 ? <Text style={styles.emptyText}>Heç bir ödəniş olunmayıb</Text> : null}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    )
}

export default PaymentScreen

