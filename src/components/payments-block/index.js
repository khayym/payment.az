import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native'
import { Box } from '../box'
import { Search } from '../searchbar'
import { DATA } from './items';
import { styles } from './styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriest } from '../../reducers/categoriesReducer';



const PaymentsBlock = () => {
    const [text, setText] = useState(null);
    const [search, setSearch] = useState(DATA);
    const dispatch = useDispatch()
    const { data, error, loading } = useSelector(state => state.categories)


    useEffect(() => {
        dispatch(fetchCategoriest());
    }, [])

    const filter = useCallback((data) => {
        setText(data);
        // data?.length > 0 ? fincer(data) : setSearch(DATA)
    }, [])

    const fincer = (str) => {
        // var pattern = str?.toLowerCase()?.split("")?.map((x) => `(?=.*${x})`)?.join("")
        // var regex = new RegExp(`${pattern}`, "gi");

        // // DATA.map(arr => arr.targets?.map(item => item.toLowerCase().match(regex) && setSearch([arr])))

        // DATA.map(arr => arr.targets?.map(item => {
        //     if (item.toLowerCase().match(regex)) {
        //         setSearch([arr])
        //         // console.log(arr)
        //     }
        //     // else setSearch(DATA)
        // }))
    }

    return (
        <View style={styles.container}>
            <Search text={text} setText={filter} />
            <View style={styles.row}>
                {
                    loading ? <ActivityIndicator size='large' style={{ flex: 1 }} /> : <FlatList
                        data={data}
                        // extraData={data}
                        renderItem={(props) => <Box {...props} />}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        horizontal={false}
                        columnWrapperStyle={styles.columWrapperStyle}
                        contentContainerStyle={styles.contentContainerStyle}
                        scrollEnabled
                        showsVerticalScrollIndicator={false}
                    />
                }

            </View>
        </View>
    )
}

export default PaymentsBlock

